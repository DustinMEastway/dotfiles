import {clampRange} from './clamp-range';

describe('wrapRange', ():void => {
  const min = 0;
  const minNegative = -7;
  const max = 9;
  const maxNegative = -1;


  test('Index within bound', () => {
    // Arrange
    const index = 9;

    // Act / Assert
    expect(clampRange(index, min, max)).toEqual(index);
  });

  test('Index above upper limit', () => {
    // Arrange
    const index = 12;
    
    // Act / Assert
    expect(clampRange(index, min, max)).toEqual(max);
  });

  test('Index below lower limit', () => {
    // Arrange
    const index = -5;
   
    // Act / Assert
    expect(clampRange(index, min, max)).toEqual(min);
  });

  test('Index above upper limit w/ min < 0', () => {
    // Arrange
    const index = 12;
   
    // Act / Assert
    expect(clampRange(index, minNegative, max)).toEqual(max);
  });

  test('Index below lower limit w/ min < 0', () => {
    // Arrange
    const index = -20;
   
    // Act / Assert
    expect(clampRange(index, minNegative, max)).toEqual(minNegative);
  });
  //TODO:rename wrap range to modulo
  
  test('Index above upper limit w/ max < 0', () => {
    // Arrange
    const index = 2;
    
    // Act / Assert
    expect(clampRange(index, minNegative, maxNegative)).toEqual(maxNegative);
  });

  test('Index below lower limit w/ max < 0', () => {
    // Arrange
    const index = -10;
    
    // Act / Assert
    expect(clampRange(index, minNegative, maxNegative)).toEqual(minNegative);
  });
});
