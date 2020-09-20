import {
  minLength,
  isValid,
  isEmail,
  containsSpecialChars,
  containsNumbers,
  validationExecutor,
} from '../validation.js';

describe('validation functions', () => {
  describe('#minLength', () => {
    let minLen;

    beforeEach(() => {
      minLen = minLength(6);
    });

    it('should return true that string length is valid', () => {
      expect(minLen('password123')).toBeTruthy();
    });

    it('should return a message that the value is too short', () => {
      expect(minLen('boo')).toEqual('must contain at least 6 characters');
    });
  });

  describe('#isValid', () => {
    it('should return true that the string is not empty', () => {
      expect(isValid('so not empty')).toBeTruthy();
    });

    it('should return a message that the string is empty', () => {
      expect(isValid('')).toEqual('must not be empty');
    });
  });

  describe('#isEmail', () => {
    it('should return true that the string is an email address', () => {
      expect(isEmail('bob@gmail.com')).toBeTruthy();
    });

    it('should return a message that the email must be valid', () => {
      expect(isEmail('not an email')).toEqual('must be a valid email');
    });
  });

  describe('#containsSpecialChars', () => {
    it('should return true that the string contains at least one special character', () => {
      expect(containsSpecialChars('blah!@')).toBeTruthy();
    });

    it('should return a message that the string must include at least one special character', () => {
      expect(containsSpecialChars('no specials here')).toEqual(
        'must contain at least 1 non-letter and non-numeric character'
      );
    });
  });

  describe('#containsNumbers', () => {
    it('should should return true that the string contains at least one number', () => {
      expect(containsNumbers('password123')).toBeTruthy();
    });

    it('should return a message that the string must include at least one number', () => {
      expect(containsNumbers('nonumbershere')).toEqual(
        'must contain at least 1 number'
      );
    });
  });

  describe('#validationExecutor', () => {
    it('should call each function once', () => {
      let mockFunction = jest.fn();
      validationExecutor('strang', [mockFunction]);
      expect(mockFunction.mock.calls.length).toEqual(1);
    });
  });
});
