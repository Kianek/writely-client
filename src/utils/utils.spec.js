import { capitalize, filterTags, invokeSequence } from '.';

describe('utils', () => {
  describe('capitalize', () => {
    test('capitalizes the first letter of a word', () => {
      expect(capitalize('john')).toBe('John');
    });

    test('if null, empty, or not a string, does nothing', () => {
      expect(capitalize('')).toBeUndefined();
    });
  });

  describe('invokeSequence', () => {
    test('calls an array of functions exactly once each', () => {
      let funcs = [];
      for (let i = 0; i < 3; i++) {
        funcs.push(jest.fn());
      }

      invokeSequence(funcs);

      funcs.forEach((func) => {
        expect(func).toBeCalledTimes(1);
      });
    });

    test('calls functions and returns an array of return values', () => {
      const funcs = [
        jest.fn(() => true),
        jest.fn(() => 5),
        jest.fn(() => 'stuff'),
        jest.fn(() => () => {}),
      ];

      const values = invokeSequence(funcs, { returnValues: true });
      expect(typeof values[0]).toBe('boolean');
      expect(typeof values[1]).toBe('number');
      expect(typeof values[2]).toBe('string');
      expect(typeof values[3]).toBe('function');
    });

    test('returns only return values of a given type', () => {
      const funcs = [
        jest.fn(() => 'string 1'),
        jest.fn(() => 5),
        jest.fn(() => 'string 2'),
        jest.fn(() => () => {}),
        jest.fn(() => 'string 3'),
      ];

      const values = invokeSequence(funcs, {
        returnValues: true,
        filter: 'string',
      });

      expect(values.length).toBe(3);
      values.forEach((val) => {
        expect(typeof val).toBe('string');
      });
    });

    test('passes args to array functions', () => {
      const funcs = [
        jest.fn((val) => val * 2),
        jest.fn((val) => val * 3),
        jest.fn((val) => val * 4),
      ];

      const values = invokeSequence(funcs, {
        returnValues: true,
        arg: 2,
      });

      expect(values[0]).toBe(4);
      expect(values[1]).toBe(6);
      expect(values[2]).toBe(8);
    });
  });

  describe('filterTags', () => {
    test('returns empty array if entries arg is null or empty', () => {
      const tags = 'one,two';
      const entries = [];
      expect(filterTags(entries, tags)).toHaveLength(0);
    });

    test('returns empty array if entries or tags args are null or empty', () => {
      expect(filterTags(undefined, undefined)).toHaveLength(0);
    });

    test('filters entries not containing all tags', () => {
      const tags = 'dog,tree,frog';
      const entries = [
        { tags },
        { tags: 'London,mouse' },
        { tags: 'orange' },
        { tags },
      ];

      const result = filterTags(entries, tags);
      expect(result).toHaveLength(2);
      expect(result[0].tags).toBe(tags);
      expect(result[1].tags).toBe(tags);
    });

    test('returns empty array if no tags match', () => {
      const entries = [
        { tags: 'moose,reptar' },
        { tags: 'chicken' },
        { tags: 'mars' },
        { tags: 'slayer' },
      ];

      expect(filterTags(entries, 'unique,tags')).toHaveLength(0);
    });
  });
});
