import { enLvlInvalid, enLvlValid, message, names } from './constants';

export default class Race {
  constructor({ createSelector, controlSelector, inputSelectors, Candidate, View }) {
    this.candidate = document.querySelector(createSelector);
    this.panel = document.querySelector(controlSelector);
    this.candidateList = [];
    this.Candidate = Candidate;
    this.view = new View();

    //inputs
    this.entName = document.querySelector(inputSelectors.entName);
    this.entBalance = document.querySelector(inputSelectors.entBalance);
    this.entAge = document.querySelector(inputSelectors.entAge);
    this.entDocs = document.querySelectorAll(inputSelectors.entDocuments);
    this.entEnLvl = document.querySelector(inputSelectors.entEn);
    this.errorBlock = document.querySelector('.candidate__message');

    document.querySelector('.container').addEventListener('click', this.genEvt);
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

  generateDocs = () => {
    this.entDocs.forEach(el => {
      el.checked = false;
      const rand = Math.random();
      if (rand < 0.8) {
        return el.checked = true;
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
    this.clearCandidate(id);
    this.addCandidate(id);
    this.init(id);
    this.race(id);
    console.log(this.candidateList);
  }

  simpleGenerate = ({ id, name, balance, age, enLvl }) => {
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
      this.generateDocs();
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
      this.generateDocs();
      this.entEnLvl.value = this.generateEnLvl(enLvlValid, enLvlInvalid);
    }
  }

  addCandidate = (id) => {
    const docArr = [];
    this.entDocs.forEach(el => docArr.push(el.checked));
    if (id === 'add') {
      if (this.#validate(this.candidateList)) {
        return;
      }
      this.candidateList.push(new this.Candidate({
        name: this.entName.value,
        balance: this.entBalance.value,
        age: this.entAge.value,
        documents: docArr,
        enLvl: this.entEnLvl.value
      }));
      this.entName.value = '';
      this.entBalance.value = '';
      this.entAge.value = '';
      this.entDocs.forEach(el => el.checked = false);
      this.entEnLvl.value = 'a1';
    }
  }

  clearCandidate = (id) => {
    if (id === 'clear') {
      this.candidateList.length = 0;
    }
  }

  init = (id) => {
    if (id === 'init') {
      this.view.raceInit(this.candidateList);
    }
  }

  race = (id) => {
    if (id === 'race') {
      this.view.raceStart(this.candidateList);
    }
  }

  #addRandData = () => ({
    name: this.generateName(names),
    balance: this.generateBalance(),
    age: this.generateAge(),
    enLvl: this.generateEnLvl(enLvlValid, enLvlInvalid)
  })
  #getRand = (max, min = 0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  #validate = () => {
    if (this.candidateList.length >= 5) {
      this.#showMessage(message.fullCandidate);
      return true;
    }
    if (!this.entName.value.trim() || !this.entAge.value.trim() || !this.entBalance.value.trim()) {
      this.#showMessage(message.emptyField);
      return true;
    }
    else if (Number.isNaN(+this.entAge.value.trim()) || Number.isNaN(+this.entBalance.value.trim())) {
      this.#showMessage(message.nan);
      return true;
    }
  }
  #showMessage = (message) => {
    this.errorBlock.innerHTML = message;
    this.errorBlock.classList.add('candidate__message-visible');
    setTimeout(() => this.errorBlock.classList.remove('candidate__message-visible'), 4000);
  }
}