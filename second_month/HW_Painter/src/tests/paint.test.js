import Paint from '../modules/Paint'
import 'jest-canvas-mock';
import { dom, options, event } from './testHelper'

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
}
document.body.innerHTML = dom
const paint = new Paint(options)

describe('Paint', function () {
  standartTest(Paint)
});

describe('Paint.setSize', function () {
  standartTest(paint.setSize)
  it('should be setSize', function () {
    paint.setSize(event);
    expect(paint.ctx.lineWidth).toBe(20);
    expect(paint.radius.textContent).toBe('20');
  });
});

describe('Paint.setColor', function () {
  standartTest(paint.setColor);
  it('should be setColor', function () {
    event.target.value = 'red';
    paint.setColor(event);
    expect(paint.ctx.strokeStyle).toBe('#ff0000');
  });
});

describe('Paint.clear', function () {
  standartTest(paint.clear);
  it('should be clear', function () {
    paint.clear();
    expect(paint.ctx.clearRect).toBeCalled();
    expect(paint.coords).toHaveLength(0);
  });
});

describe('Paint.save', function () {
  standartTest(paint.save);
  it('should be save', function () {
    paint.save();
    const
      code = 'data:text/json;charset=utf-8',
      dataStr = `${code},${encodeURIComponent(JSON.stringify(paint.coords))}`
    expect(paint.download.href).toEqual(dataStr);
    expect(paint.download.download).toBe('canvas.json');
  });
});

describe('Paint.draw', function () {
  standartTest(paint.draw)
  it('should be draw', function () {
    paint.draw(event)
    expect(paint.coords).toEqual([{
      x: event.offsetX,
      y: event.offsetY,
      dx: event.movementX,
      dy: event.movementY,
      radius: paint.ctx.lineWidth,
      color: paint.ctx.strokeStyle
    }]);
    expect(paint.ctx.beginPath).toBeCalled();
    expect(paint.ctx.moveTo).toBeCalled();
    expect(paint.ctx.lineTo).toBeCalled();
    expect(paint.ctx.stroke).toBeCalled();
    expect(paint.ctx.fill).toBeCalled();
    expect(paint.ctx.closePath).toBeCalled();
  });
});

describe('Paint.paintEvent', function () {
  document.body.innerHTML = dom;
  standartTest(paint.paintEvent);
  it('should be paint', function () {
    paint.paintEvent(paint.canvas, 'mousemove', paint.draw);
    const ev = new Event('mousemove');
    paint.canvas.dispatchEvent(ev);
    expect(typeof paint.paintEvent).toBe('function');
  });
});