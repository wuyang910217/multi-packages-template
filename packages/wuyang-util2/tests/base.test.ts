import { isColor } from '../src/base';

describe('检查', () => {
  test('应该是错误的十六进制颜色', () => {
    expect(isColor('#ff333')).toBe(false);
  });
});
