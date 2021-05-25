import { Circle } from "../model";
import View from "../view/View";

const standartTest = (func) => {
  it('should be defined ', function () {
    expect(func).toBeDefined();
  });
  it('should be function', function () {
    expect(typeof func).toBe('function');
  });
}
const view = new View()
describe('View', function () {
  standartTest(View)
});

describe('View.fixHorizontal', function () {
  standartTest(view.fixHorizontal)
  it('should be called', function () {

  });
});