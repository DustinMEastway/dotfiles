/**
 * Creates a clamped boundary preventing a value from
 * exceeding a max/min value by resetting the value to the 
 * closest min/max value it exceeded.
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
