import Paint from '../modules/Paint'

describe('AList', function () {
  it('should be defined ', function () {
    expect(Paint).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof Paint).toBe('function');
  });
});
