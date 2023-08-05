/**
 * Creates a clamped boundary by setting a min/max limit
 * and resetting the index value to the closest limit if
 * exceeded.
 * 
 * @param index is the value to to be evaluated
 * @param min is the lower limit value
 * @param max is the upper limit value
 * @returns the updated index
 */
export function clampRange (
  index: number,
  min: number, 
  max: number
): number {
  return Math.min(Math.max(index, min), max);
}
