/**
 * Creates a 
 * 
 * @param index 
 * @param min 
 * @param max 
 * @returns 
 */
export function wrapRange (
  index: number,
  min: number, 
  max: number
): number {
  index = Math.min(Math.max(index, min), max);
  return index;
}
