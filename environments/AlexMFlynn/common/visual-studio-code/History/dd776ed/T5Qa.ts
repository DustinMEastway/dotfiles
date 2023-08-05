import { wrapRange } from './wrap-range';

describe('wrapRange', ():void => {
  const max = 9;
  const min = 0;
  const expectedPositive = 4;
  const expectedNegative = -4;

  test('Index within bound', () => {
    // Arrange
    const index = 4;

    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index above upper limit', () => {
    // Arrange
    const index = 12;
    
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index below lower limit', () => {
    // Arrange
    const index = -6;
   
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

});
