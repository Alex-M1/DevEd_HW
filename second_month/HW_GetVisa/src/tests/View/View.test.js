import 'jest-canvas-mock';
import 'regenerator-runtime';
import View from '../../js/View';
import { dom, candidate } from './View.helper';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

describe('View defined', () => {
  standartTest(View);
});

describe('View.raceInit', () => {
  document.body.innerHTML = dom;
  standartTest(new View().raceInit);
  it('should be raceInitCalled', () => {
    const view = new View();
    view.ctx.fillText = jest.fn();
    view.raceInit(candidate);
    expect(view.ctx.fillStyle).toBe('#ffffff');
    expect(view.ctx.font).toBe('bold 18px sans-serif');
    expect(view.ctx.fillText).toHaveBeenCalled();
  });
});

describe('View.raceStart', () => {
  document.body.innerHTML = dom;
  standartTest(new View().raceStart);
  it('should be raceStart called', async () => {
    const view = new View();
    view.ctx.fillText = jest.fn();
    view.checkBalance = jest.fn();
    view.checkOtherDocuments = jest.fn();
    view.finalCheck = jest.fn();
    await view.raceStart(candidate);
    expect(view.checkBalance).toHaveBeenCalled();
    expect(view.checkOtherDocuments).toHaveBeenCalled();
    expect(view.finalCheck).toHaveBeenCalled();
    expect(view.ctx.fillStyle).toBe('#ffffff');
    expect(view.ctx.font).toBe('bold 18px sans-serif');
    expect(view.ctx.fillText).toHaveBeenCalledTimes(3);
  });
});

describe('View.finalCheck', () => {
  document.body.innerHTML = dom;
  standartTest(new View().finalCheck);
  it('should be finalCheck nobody', async () => {
    const view = new View();
    const promise = jest.fn().mockImplementation(() => {

    });
    view.ctx.fillText = jest.fn();

    await view.finalCheck(promise);

    expect(view.ctx.fillStyle).toBe('#ffffff');
    expect(view.ctx.font).toBe('bold 18px sans-serif');
    expect(view.ctx.fillText).toHaveBeenCalledTimes(1);
    expect(view.ctx.fillText).toHaveBeenCalledWith('Nobody get visa', 810, 200);
  });
});