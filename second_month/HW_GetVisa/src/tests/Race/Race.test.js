import Race from '../../js/Race';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};
// it('should be a data === undefined', function () {
//   var spy = jest.spyOn(YAML, 'read')
//   var mock = jest.fn()
//   YAML.read = mock.mockReturnValue(undefined)
//   expect(YAML.readQuestions(res, '', headers, query)).toBe()
//   spy.mockRestore()
// })
describe('Generate name', () => {
  let race;
  beforeEach(() => {
    race = new Race();
  });
  standartTest(Race);
  it('should be return object', () => {
    expect().toEqual();
  });
});