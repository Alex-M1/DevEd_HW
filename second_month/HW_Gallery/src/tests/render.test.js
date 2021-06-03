import { render } from '../js';
import { dom } from './dom';
const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
};
describe('render', function () {
  document.body.innerHTML = dom;
  const nodes = {
    modalImg: document.querySelector('#modalImg'),
    closeBtn: document.querySelector('#close'),
    bigPhoto: document.querySelector('#bigPhoto'),
    slides: document.querySelector('#slides'),
    showBtn: document.querySelector('#showAll'),
    popup: document.querySelector('.modal')
  };
  standartTest(render);

  it('should be bigPhoto.src', function () {
    const modal = jest.fn();
    const photos = [{ urls: { regular: '123' } }];
    render(nodes, modal, photos);
    expect(nodes.bigPhoto.src).toBe('http://localhost/123');
  });

  it('should be slidesclick', function () {
    const modal = jest.fn();
    const photos = [{ urls: { regular: '123' } }];

    const click = new Event('click');
    click.target.nodeName = 'IMG';
  
    nodes.slides.dispatchEvent(click);
    render(nodes, modal, photos);

    expect(nodes.bigPhoto.src).toBe('http://localhost/123');
  });
});