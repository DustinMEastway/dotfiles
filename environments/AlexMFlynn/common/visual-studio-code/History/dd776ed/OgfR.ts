import { wrapRange } from './wrap-range';

describe('wrapRange', ():void => {
  let expected = 3;

  test('Index within bound', () => {
    expect(wrapRange(3, 0, 9)).toEqual(expected);
  });
});
