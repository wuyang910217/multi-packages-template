import * as Lib from '../src';

describe('检查', () => {
  test('错误十六进制颜色', () => {
    expect(Lib.isColor('#ff333')).toBe(false);
  });
});
