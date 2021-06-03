import { Circle } from '../model'
import { dom } from './testHelpers';

document.body.innerHTML = dom;

const circle = new Circle(150, 150)

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
}

describe('Circle', function () {
  standartTest(Circle)
});

describe('Circle.setParams', function () {
  const realRand = global.Math.random
  beforeEach(() => {
    global.Math.random = jest.fn().mockReturnValue(0.5)
  })
  afterEach(() => {
    global.Math.random = realRand
  })
  standartTest(circle.setParams)
  it('should be called', function () {
    circle.setParams();
    expect(circle.radius).toBe(23);
    expect(circle.speed).toBe(25);
    expect(circle.color).toBe("rgb(127, 127, 127)");
    expect(circle.dx).toBe(-1);
    expect(circle.dy).toBe(1.2246467991473532e-16);
  });
});


describe('Circle.init', function () {
  standartTest(circle.init)
  it('should be called', function () {
    const mockInstance = new Circle(150, 150)
    mockInstance.circle.setAttribute = jest.fn()
    mockInstance.svg.appendChild = jest.fn()
    mockInstance.init()
    expect(mockInstance.circle.setAttribute).toHaveBeenCalledWith('cx', mockInstance.x)
    expect(mockInstance.circle.setAttribute).toHaveBeenCalledWith('cy', mockInstance.y)
    expect(mockInstance.circle.setAttribute).toHaveBeenCalledWith('r', mockInstance.radius)
    expect(mockInstance.circle.setAttribute).toHaveBeenCalledWith('fill', mockInstance.color)
    expect(mockInstance.svg.appendChild).toHaveBeenCalledWith(mockInstance.circle)
  });
});

describe('Circle.setX', function () {
  standartTest(circle.init)
  it('should be called', function () {
    const mockInstance = new Circle(150, 150)
    mockInstance.circle.setAttribute = jest.fn()
    mockInstance.setX(1)
    expect(mockInstance.circle.setAttribute).toHaveBeenCalledWith('cx', mockInstance.x)
    expect(mockInstance.x).toBe(1)
  });
});

describe('Circle.setY', function () {
  standartTest(circle.init)
  it('should be called', function () {
    const mockInstance = new Circle(150, 150)
    mockInstance.circle.setAttribute = jest.fn()
    mockInstance.setY(1)
    expect(mockInstance.circle.setAttribute).toHaveBeenCalledWith('cy', mockInstance.y)
    expect(mockInstance.y).toBe(1)
  });
});

describe('Circle.setDx', function () {
  standartTest(circle.init)
  it('should be called', function () {
    const mockInstance = new Circle(150, 150)
    mockInstance.circle.setAttribute = jest.fn()
    mockInstance.setDx(1)
    expect(mockInstance.dx).toBe(1)
  });
});

describe('Circle.setDy', function () {
  standartTest(circle.init)
  it('should be called', function () {
    const mockInstance = new Circle(150, 150)
    mockInstance.circle.setAttribute = jest.fn()
    mockInstance.setDy(1)
    expect(mockInstance.dy).toBe(1)
  });
});