import { wrapRange } from './wrap-range';

describe('wrapRange', ():void => {
  const min = 0;
  const minNegative = -7;
  const max = 9;
  const expectedPositive = 4;
  const expectedNegative = -4;
  const maxNegative = -1;

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
    const index = -5;
   
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index above upper limit w/ min < 0', () => {
    // Arrange
    const index = 12;
   
    // Act / Assert
    expect(wrapRange(index, minNegative, max)).toEqual(expectedNegative);
  });

  test('Index below lower limit w/ min < 0', () => {
    // Arrange
    const index = -20;
   
    // Act / Assert
    expect(wrapRange(index, minNegative, max)).toEqual(expectedNegative);
  });

  test('Index above upper limit w/ max < 0', () => {
    // Arrange
    const index = 2;
    
    // Act / Assert
    expect(wrapRange(index, minNegative, maxNegative)).toEqual(expectedNegative);
  });

  test('Index below lower limit w/ max < 0', () => {
    // Arrange
    const index = -10;
    
    // Act / Assert
    expect(wrapRange(index, minNegative, maxNegative)).toEqual(expectedNegative);
  });
});
