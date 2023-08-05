import { wrapRange } from './wrap-range';

describe('wrapRange', ():void => {
  const expectedPositive = 3;
  const expectedNegative = -3;
  
  test('Index within bound', () => {
    expect(wrapRange(3, 0, 9)).toEqual(expectedPositive);
  });
});
