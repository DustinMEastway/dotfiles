/**
 * Creates a wrapping boundary that loops the index when
 * the limit is exceeded using a modulus method.
 * 
 * @param index is the vallue to be evaluated
 * @param min is the lower limit
 * @param max is the upper limit
 * @returns the updated index
 */
export function modulo (
  index:number,
  min: number, 
  max: number
): number {
  const difference = max - min;
  const initialMod = (index - min) % (difference);

  return (initialMod + difference) % (difference) + min;
}
