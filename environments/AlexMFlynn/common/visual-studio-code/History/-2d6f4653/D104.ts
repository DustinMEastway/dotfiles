export function wrapRange (
  index:number,
  min: number, 
  max: number
): number {
  
  index =(((index - min) % (max - min)) + (max - min)) % (max - min) + min;
  return index;
}
