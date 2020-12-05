/**
 * 检查手机号是否合法
 * @param {String} phone 手机号
 *
 * @example
 *   isValidPhone(null)
 *   // => false
 *   isValidPhone('123')
 *   // => false
 *   isValidPhone('12345678901')
 *   // => true
 */
export function isValidPhone(phone: string): boolean {
  if (phone.length !== 11) {
    return false;
  }
  return /^1[2-9]\d{9}$/.test(phone);
}

export function isTest() {
  return true;
}
