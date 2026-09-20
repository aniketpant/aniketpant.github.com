import type { CollectionEntry } from 'astro:content';

export interface ProcessedPost {
  id: string;
  entry: CollectionEntry<'posts'>;
  title: string;
  date: Date;
  year: string;
  month: string;
  day: string;
  slug: string;
  url: string;
  author: string;
  layout: string;
  category: string;
  formattedDate: string;
  isoDate: string;
  relativeTime: string;
  excerpt: string;
  readingTime: string;
}

export function parsePostDate(entry: CollectionEntry<'posts'>): {
  date: Date;
  year: string;
  month: string;
  day: string;
} {
  const filename = entry.id;
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})/);
  const fileYear = match ? match[1] : '2011';
  const fileMonth = match ? match[2] : '01';
  const fileDay = match ? match[3] : '01';

  let date: Date;
  const rawDate = entry.data.date;
  if (rawDate instanceof Date) {
    date = rawDate;
  } else if (typeof rawDate === 'string' && rawDate.trim().length > 0) {
    const parsed = new Date(rawDate.replace(/-/g, '/'));
    date = isNaN(parsed.getTime())
      ? new Date(Number(fileYear), Number(fileMonth) - 1, Number(fileDay))
      : parsed;
  } else {
    date = new Date(Number(fileYear), Number(fileMonth) - 1, Number(fileDay));
  }

  const year = fileYear;
  const month = fileMonth;
  const day = fileDay;

  return { date, year, month, day };
}

export function getPostSlug(entry: CollectionEntry<'posts'>): string {
  if (entry.data.slug) {
    return entry.data.slug;
  }
  const match = entry.id.match(/^\d{4}-\d{2}-\d{2}-(.*)$/);
  return match ? match[1] : entry.id;
}

export function formatDateLong(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 30) {
    return `${Math.max(1, diffInDays)} days ago`;
  }
  const diffInMonths = Math.floor(diffInDays / 30.4375);
  if (diffInMonths < 12) {
    return `${diffInMonths} months ago`;
  }
  const diffInYears = Math.floor(diffInDays / 365.25);
  return `${diffInYears} years ago`;
}

export function extractExcerpt(body?: string): string {
  if (!body) return '';
  // Strip comments / html tags / markdown headers
  const lines = body.split(/\n\s*\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      !trimmed ||
      trimmed.startsWith('#') ||
      trimmed.startsWith('<img') ||
      trimmed.startsWith('<div') ||
      trimmed.startsWith('![')
    ) {
      continue;
    }
    const clean = trimmed
      .replace(/<[^>]+>/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    if (clean.length > 20) {
      return clean.length > 200 ? clean.slice(0, 197) + '...' : clean;
    }
  }
  return '';
}

export function processPost(entry: CollectionEntry<'posts'>): ProcessedPost {
  const { date, year, month, day } = parsePostDate(entry);
  const slug = getPostSlug(entry);
  const url = `/${year}/${month}/${slug}/`;
  const formattedDate = formatDateLong(date);
  const isoDate = date.toISOString();
  const relativeTime = getRelativeTime(date);
  const excerpt = extractExcerpt(entry.body);

  const readingTime = getReadingTime(entry.body);

  return {
    id: entry.id,
    entry,
    title: entry.data.title,
    date,
    year,
    month,
    day,
    slug,
    url,
    author: entry.data.author || 'Aniket Pant',
    layout: entry.data.layout || 'post',
    category: entry.data.category || 'note',
    formattedDate,
    isoDate,
    relativeTime,
    excerpt,
    readingTime,
  };
}

export function getReadingTime(body?: string): string {
  if (!body) return '1 min read';
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function sortPostsDesc(posts: ProcessedPost[]): ProcessedPost[] {
  return [...posts].sort((a, b) => b.date.getTime() - a.date.getTime());
}
