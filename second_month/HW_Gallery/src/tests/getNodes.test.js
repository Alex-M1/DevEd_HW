import { getNodes, nodeSelectors } from '../js';
describe('getNodes', function () {
  it('should be defined ', function () {
    expect(getNodes).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof getNodes).toBe('function');
  });
  it('should be returned nodes', function () {
    expect(getNodes(nodeSelectors)).toEqual({
      'bigPhoto': null,
      'closeBtn': null,
      'modalImg': null,
      'popup': null,
      'showBtn': null,
      'slides': null

    });
  });
});