import { isValidPhone } from '../src/base';

describe('is检查', () => {
  test('应该是正确的手机号', () => {
    expect(isValidPhone('12345678911')).toBe(true);
  });
});
