import {clampRange} from './clamp-range';

describe('wrapRange', ():void => {
  const min = 0;
  const minNegative = -7;
  const max = 9;
  const expectedPositive = 9;
  const expectedNegative = -7;

  test('Index within bound', () => {
    // Arrange
    const index = 4;

    // Act / Assert
    expect(clampRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index above upper limit', () => {
    // Arrange
    const index = 9;
    
    // Act / Assert
    expect(clampRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index below lower limit', () => {
    // Arrange
    const index = -5;
   
    // Act / Assert
    expect(clampRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index above upper limit w/ min < 0', () => {
    // Arrange
    const index = 12;
   
    // Act / Assert
    expect(clampRange(index, minNegative, max)).toEqual(expectedNegative);
  });

  test('Index below lower limit w/ min < 0', () => {
    // Arrange
    const index = -20;
   
    // Act / Assert
    expect(clampRange(index, minNegative, max)).toEqual(expectedNegative);
  });
  
});
