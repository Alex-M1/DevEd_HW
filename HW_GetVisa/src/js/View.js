export default class View {
  constructor(candidateList) {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.candidateList = candidateList;
  }

  raceInit = () => {
    this.candidateList.forEach(el => {

    });
  }
}