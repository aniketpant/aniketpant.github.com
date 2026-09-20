/**
 * djb2 hash — fast, deterministic string → 32-bit int
 */
export function djb2(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
  }
  return hash >>> 0; // unsigned
}

const LCG_MULT = 1103515245n;
const LCG_INC = 12345n;
const MASK31 = 0x7fffffffn;

/**
 * Extract `count` values in range [0, max) from a seed string.
 * Uses a 31-bit LCG with BigInt to avoid float64 precision loss.
 */
export function hashValues(seed: string, count: number, max: number): number[] {
  let hash = BigInt(djb2(seed)) & MASK31;
  const out: number[] = [];
  for (let i = 0; i < count; i++) {
    hash = (hash * LCG_MULT + LCG_INC) & MASK31;
    out.push(Number(hash % BigInt(max)));
  }
  return out;
}

/**
 * Extract `count` floats in range [0, 1)
 */
export function hashFloats(seed: string, count: number): number[] {
  return hashValues(seed, count, 1_000_000).map(v => v / 1_000_000);
}
