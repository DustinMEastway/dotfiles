import { wrapRange } from './wrap-range';

describe('wrapRange', ():void => {
  const max = 9;
  const expectedPositive = 4;
  const expectedNegative = -4;
  
  let min = 0;
  let index =0;

  test('Index within bound', () => {
    // Arrange
    index = 4;

    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index above upper limit', () => {
    // Arrange
    index = 13;
    
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index below lower limit', () => {
    // Arrange
    index = -6;
   
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

  test('Index below lower limit w/ min < 0', () => {
    // Arrange
    index = -6;
    min = -7;
   
    // Act / Assert
    expect(wrapRange(index, min, max)).toEqual(expectedPositive);
  });

});
