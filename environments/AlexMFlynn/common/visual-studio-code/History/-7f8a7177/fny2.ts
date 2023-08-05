import { wrapRange } from './wrap-range';

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

  test('new test', () => {
    // Arrange
    const index = 4;
   const newMin = -1;
   
    // Act / Assert
    expect(wrapRange(index, minNegative, max)).toEqual(expectedNegative);
  });

  

});
