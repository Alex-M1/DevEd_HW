import { render, getNodes, nodeSelectors } from '../js';
import { dom } from './dom';
describe('render', function () {
  document.body.innerHTML = dom;
  it('should be defined ', function () {
    expect(render).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof render).toBe('function');
  });

});