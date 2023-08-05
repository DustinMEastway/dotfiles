import { wrapRange } from './wrap-range';

describe('wrapRange', ():void => {
  const max = 9;
  const expectedPositive = 4;
  const expectedNegative = -4;
  
  let min = 0;

  test('Index within bound', () => {
    // Arrange
    const index = 4;

    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index above upper limit', () => {
    // Arrange
    const index = 13;
    
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index below lower limit', () => {
    // Arrange
    const index = -6;
   
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index below lower limit w/ min < 0', () => {
    // Arrange
    const index = -6;
    min = -
   
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

});
