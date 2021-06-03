import chai from 'chai';
import sinon from 'sinon';
import { JSDOM } from 'jsdom';
import { Engeneer } from '../js';

describe('setNegative', () => {
  // global.document = {
  //   querySelector: sinon.fake().returnValues = function (str) {
  //     if (str === '.calculator__display') {
  //       return {
  //         textContent: '2'
  //       }
  //     }
  //   }
  // }
  const doc = new JSDOM('<!doctype html><html><body></body></html>');
  const win = doc.defaultView;

  global.document = doc;
  global.window = win;
  var options = {
    values: '.calculator__values',
    calcBtns: '.calculator__buttons',
    display: '.calculator__display',
  };
  var test = new Engeneer(options);
  test.display = { textContent: '2' };
  chai.assert.isDefined(test.setNegative);
  it('should to be defined', () => {
    chai.assert.isDefined(test.setNegative);
  });
  it('should to be function', () => {
    chai.assert.equal(typeof test.setNegative, 'function');
  });
  it('should return 1', () => {
    test.setNegative('-/+');
    chai.assert.equal(test.setNegative('-/+'), undefined);
    chai.assert.equal(test.current, '-2');
  });
  // it("should return 6", () => {
  //   chai.assert.equal(getFactorial(3), 6);
  // });
});