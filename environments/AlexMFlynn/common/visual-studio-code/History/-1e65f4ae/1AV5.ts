import {clampRange} from './clamp-range';

describe('wrapRange', ():void => {
  const min = 0;
  const minNegative = -7;
  const max = 9;
  const expectedPositive = 4;
  const expectedNegative = -4;

  test('Index within bound', () => {
    // Arrange
    const index = 4;

    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });
  
});
