const { switcher, batch } = require('./index');

describe('theme-switcher', () => {
  test('should process string input', () => {
    expect(switcher('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => switcher(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = switcher('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
