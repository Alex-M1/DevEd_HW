import Paint from '../modules/Paint'
import 'jest-canvas-mock';
import { dom, options, event } from './testHelper'



describe('Paint', function () {
  it('should be defined ', function () {
    expect(Paint).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof Paint).toBe('function');
  });
});

describe('Paint.setSize', function () {
  document.body.innerHTML = dom
  it('should be defined ', function () {
    const paint = new Paint(options)
    expect(paint.setSize).toBeDefined();
  });
  it('should be function', function () {
    const paint = new Paint(options)
    expect(typeof paint.setSize).toBe('function');
  });
  it('should be setSize', function () {
    const paint = new Paint(options)
    paint.setSize(event)
    expect(paint.ctx.lineWidth).toBe(20);
    expect(paint.radius.textContent).toBe('20')
  });
});

describe('Paint.setColor', function () {
  document.body.innerHTML = dom
  it('should be defined ', function () {
    const paint = new Paint(options)
    expect(paint.setColor).toBeDefined();
  });
  it('should be function', function () {
    const paint = new Paint(options)
    expect(typeof paint.setColor).toBe('function');
  });
  it('should be setColor', function () {
    const paint = new Paint(options)
    event.target.value = 'red'
    paint.setColor(event)
    expect(paint.ctx.strokeStyle).toBe('#ff0000')
  });
});

describe('Paint.clear', function () {
  document.body.innerHTML = dom
  it('should be defined ', function () {
    const paint = new Paint(options)
    expect(paint.clear).toBeDefined();
  });
  it('should be function', function () {
    const paint = new Paint(options)
    expect(typeof paint.clear).toBe('function');
  });
  it('should be clear', function () {
    const paint = new Paint(options)
    paint.clear()
    expect(paint.ctx.clearRect).toBeCalled()
    expect(paint.coords).toHaveLength(0)
  });
});

describe('Paint.save', function () {
  document.body.innerHTML = dom
  it('should be defined ', function () {
    const paint = new Paint(options)
    expect(paint.save).toBeDefined();
  });
  it('should be function', function () {
    const paint = new Paint(options)
    expect(typeof paint.save).toBe('function');
  });
  it('should be save', function () {
    const paint = new Paint(options)
    paint.save()
    const
      code = 'data:text/json;charset=utf-8',
      dataStr = `${code},${encodeURIComponent(JSON.stringify(paint.coords))}`
    expect(paint.download.href).toEqual(dataStr)
    expect(paint.download.download).toBe('canvas.json')
  });
});

describe('Paint.draw', function () {
  document.body.innerHTML = dom
  it('should be defined ', function () {
    const paint = new Paint(options)
    expect(paint.draw).toBeDefined();
  });
  it('should be function', function () {
    const paint = new Paint(options)
    expect(typeof paint.draw).toBe('function');
  });
  it('should be draw', function () {
    const paint = new Paint(options)
    paint.draw(event)
    expect(paint.coords).toEqual([{
      x: event.offsetX,
      y: event.offsetY,
      dx: event.movementX,
      dy: event.movementY,
      radius: paint.ctx.lineWidth,
      color: paint.ctx.strokeStyle
    }])
    expect(paint.ctx.beginPath).toBeCalled()
    expect(paint.ctx.moveTo).toBeCalled()
    expect(paint.ctx.lineTo).toBeCalled()
    expect(paint.ctx.stroke).toBeCalled()
    expect(paint.ctx.fill).toBeCalled()
    expect(paint.ctx.closePath).toBeCalled()
  });
});

describe('Paint.paintEvent', function () {
  document.body.innerHTML = dom
  it('should be defined ', function () {
    const paint = new Paint(options)
    expect(paint.paintEvent).toBeDefined();
  });
  it('should be function', function () {
    const paint = new Paint(options)
    expect(typeof paint.paintEvent).toBe('function');
  });
  it('should be paint', function () {
    const paint = new Paint(options)
    paint.paintEvent(paint.canvas, 'mousemove', paint.draw)
    const ev = new Event('mousemove')
    paint.canvas.dispatchEvent(ev);
    expect(typeof paint.paintEvent).toBe('function');
  });
});
