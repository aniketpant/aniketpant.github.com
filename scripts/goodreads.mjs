// Build the reading list from a Goodreads export.
//
//   node scripts/goodreads.mjs --csv ~/Downloads/goodreads_library_export.csv [shelf]
//
// Goodreads no longer serves the per-shelf RSS feed (every /review/list_rss/<id>
// returns 404) and robots.txt disallows /review/list, so this reads the export
// instead: My Books -> Import and export -> Export library, then pass the file.
//
// Covers are not in the export, so they come from Open Library by ISBN. A cover
// that does not resolve is dropped rather than left as a blank slot.
//
// The site is static: this writes src/data/reading.json and the build reads it.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../src/data/reading.json', import.meta.url));

const args = process.argv.slice(2);
const csvFlag = args.indexOf('--csv');
const csvPath = csvFlag >= 0 ? args[csvFlag + 1] : null;
const shelf =
  args.find((arg, i) => !arg.startsWith('--') && i !== csvFlag + 1) ??
  'currently-reading';

if (!csvPath) {
  console.error(
    'usage: node scripts/goodreads.mjs --csv <goodreads_library_export.csv> [shelf]',
  );
  console.error(
    '  shelf defaults to "currently-reading"; the export calls it Exclusive Shelf',
  );
  process.exit(2);
}

/// Minimal RFC 4180 reader: quoted fields, escaped quotes, CRLF.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      if (row.some((value) => value !== '')) rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }
  row.push(field);
  if (row.some((value) => value !== '')) rows.push(row);

  const [header, ...body] = rows;
  return body.map((cells) =>
    Object.fromEntries(
      header.map((name, index) => [name.trim(), (cells[index] ?? '').trim()]),
    ),
  );
}

/// Open Library answers 404 for an ISBN it has no cover for.
async function coverFor(isbn) {
  if (!isbn) return null;
  const url = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const type = response.headers.get('content-type') ?? '';
    return response.ok && type.startsWith('image/') ? url : null;
  } catch {
    return null;
  }
}

const csv = await readFile(csvPath, 'utf8');
const rows = parseCsv(csv).filter((row) => row['Exclusive Shelf'] === shelf);

const books = [];
for (const row of rows) {
  const isbn = (row.ISBN13 || row.ISBN || '').replace(/[^0-9Xx]/g, '');
  books.push({
    title: row.Title,
    author: [row.Author, row['Additional Authors']].filter(Boolean).join(', '),
    link: row['Book Id']
      ? `https://www.goodreads.com/book/show/${row['Book Id']}`
      : 'https://www.goodreads.com',
    cover: await coverFor(isbn),
    added: row['Date Added'] || null,
  });
}

books.sort((a, b) => (b.added ?? '').localeCompare(a.added ?? ''));

await writeFile(
  OUT,
  JSON.stringify(
    {
      shelf,
      source: 'goodreads-export',
      updated: new Date().toISOString().slice(0, 10),
      books,
    },
    null,
    2,
  ) + '\n',
);

console.log(
  `goodreads: ${books.length} book(s) on "${shelf}" -> src/data/reading.json`,
);
for (const book of books)
  console.log(
    `  ${book.title} — ${book.author}${book.cover ? '' : ' (no cover)'}`,
  );
