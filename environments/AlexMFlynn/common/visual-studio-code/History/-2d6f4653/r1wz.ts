export function wrapRange (
  index:number,
  min: number, 
  max: number
): number {
  index =((index % max))
  return index;
}
