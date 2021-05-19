import { minLength, isEmpty, isEmail, isStrongPassword } from './validators';

describe('validators', () => {
  describe('minLength', () => {
    let func;
    test('value meets the required length', () => {
      func = minLength(3);

      expect(func('someword')).toBeTruthy();
    });

    test('value does not meet minimum length requirement', () => {
      func = minLength(8);

      expect(typeof func('short')).toBe('string');
    });
  });

  describe('isEmpty', () => {
    test('value is not empty', () => {
      expect(isEmpty('not empty')).toBeTruthy();
    });

    test('value is empty', () => {
      expect(typeof isEmpty('')).toBe('string');
    });
  });

  describe('isEmail', () => {
    test('value is a valid email', () => {
      expect(isEmail('jim@gmail.com')).toBeTruthy();
    });

    test('value is not a valid email', () => {
      expect(typeof isEmail('blah')).toBe('string');
    });
  });

  describe('isStrongPassword', () => {
    test('password is strong', () => {
      expect(isStrongPassword('SuperStronkPW!!11')).toBeTruthy();
    });

    test('password is weak', () => {
      expect(typeof isStrongPassword('weakpw')).toBe('string');
    });
  });
});
