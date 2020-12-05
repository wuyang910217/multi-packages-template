import * as Lib from '../src';

describe('is检查', () => {
  test('正确手机号', () => {
    expect(Lib.isValidPhone('12345678911')).toBe(true);
  });
});
