import { documents, enLvlInvalid, enLvlValid, names } from './constants';

export default class Race {
  constructor({ createSelector, controlSelector, inputSelectors, Candidate }) {
    this.candidate = this.#qs(createSelector);
    this.panel = this.#qs(controlSelector);
    this.candidateList = [];
    this.Candidate = Candidate;

    //inputs
    this.entName = this.#qs(inputSelectors.entName);
    this.entBalance = this.#qs(inputSelectors.entBalance);
    this.entAge = this.#qs(inputSelectors.entAge);
    this.entDocs = this.#qs(inputSelectors.entDocuments);
    this.entEnLvl = this.#qs(inputSelectors.entEn);

    this.#qs('.container').addEventListener('click', this.genEvt);
  }

  generateName = (names) => {
    const rand = this.#getRand(names.length - 1);
    return names[rand];
  }

  generateBalance = () => {
    const rand = Math.random();
    if (rand <= 0.6) {
      return this.#getRand(4000, 2000);
    }
    else {
      return this.#getRand(2000);
    }
  }

  generateAge = () => {
    const rand = Math.random();
    if (rand < 0.7) {
      return this.#getRand(60, 18);
    }
    else if (rand > 0.7 && rand < 0.85) {
      return this.#getRand(17, 10);
    }
    else {
      return this.#getRand(90, 61);
    }
  }

  generateDocs = (docs) => {
    return docs.map(el => {
      const rand = Math.random();
      if (rand < 0.8) {
        return el;
      }
    });
  }

  generateEnLvl = (valid, invalid) => {
    const rand = Math.random();
    if (rand < 0.3) {
      return valid[this.#getRand(valid.length - 1)];
    }
    else {
      return invalid[this.#getRand(invalid.length - 1)];
    }
  }

  genEvt = (e) => {
    const id = e.target.getAttribute('id');
    const { name, balance, age, docs, enLvl } = this.#addRandData();

    this.simpleGenerate({ id, name, balance, age, docs, enLvl });
    this.generateAll(id);
    this.addCandidate(id);
    console.log(this.candidateList);
  }

  simpleGenerate = ({ id, name, balance, age, docs, enLvl }) => {
    if (id === 'genName') {
      this.entName.value = name;
    }
    else if (id === 'genBalance') {
      this.entBalance.value = balance;
    }
    else if (id === 'genAge') {
      this.entAge.value = age;
    }
    else if (id === 'genDocuments') {
      this.entDocs.value = docs;
    }
    else if (id === 'genEn') {
      this.entEnLvl.value = enLvl;
    }
  }

  generateAll = (id) => {
    if (id === 'generateAll') {
      this.entName.value = this.generateName(names);
      this.entBalance.value = this.generateBalance();
      this.entAge.value = this.generateAge();
      this.entDocs.value = this.generateDocs(documents);
      this.entEnLvl.value = this.generateEnLvl(enLvlValid, enLvlInvalid);
    }

  }

  addCandidate = (id) => {
    if (id === 'add') {
      this.candidateList.push(new this.Candidate({
        name: this.entName.value,
        balance: this.entBalance.value,
        age: this.entAge.value,
        documents: this.entDocs.value.split(','),
        enLvl: this.entEnLvl.value
      }));
    }
  }

  #addRandData = () => ({
    name: this.generateName(names),
    balance: this.generateBalance(),
    age: this.generateAge(),
    docs: this.generateDocs(documents),
    enLvl: this.generateEnLvl(enLvlValid, enLvlInvalid)
  })

  #getRand = (max, min = 0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  #qs = (selector) => document.querySelector(selector)
}