/**
 * Creates a wrapping boundary that loops the index when
 * the limit is exceeded
 * 
 * @param index is the vallue to be 
 * @param min 
 * @param max 
 * @returns 
 */
export function wrapRange (
  index:number,
  min: number, 
  max: number
): number {
  index =(((index - min) % (max - min)) + (max - min)) % (max - min) + min;
  return index;
}
