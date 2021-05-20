import { capitalize } from '.';

describe('utils', () => {
  describe('capitalize', () => {
    test('capitalizes the first letter of a word', () => {
      expect(capitalize('john')).toBe('John');
    });

    test('if null, empty, or not a string, does nothing', () => {
      expect(capitalize('')).toBeUndefined();
    });
  });
});
