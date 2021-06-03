import Candidate from '../js/Candidate';

const standartTest = (func) => {
  it('should be defined ', () => {
    expect(func).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof func).toBe('function');
  });
};

describe('Candidate', () => {
  standartTest(Candidate);
  it('should be return object', () => {
    const candidate = {
      name: 'Alex',
      balance: '2000',
      age: 26,
      documents: ['passport'],
      enLvl: 'b2'
    };
    expect(new Candidate(candidate)).toEqual(candidate);
  });
});