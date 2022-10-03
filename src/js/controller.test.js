const controller = require('./controller');

describe('controller', () => {
  it('should return a string', () => {
    const result = controller();
    expect(result).toBe('Hello World!');
  });
});
