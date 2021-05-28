import { X, Y, RADIUS } from './constants';

export default class View {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  raceInit = (candidateList) => {
    candidateList.forEach((el, i) => {
      this.#drawText(el.name, X, Y * (i + 1));
    });
  }

  raceStart = async (candidateList) => {
    await this.checkBalance(candidateList);
    this.#drawText('Age', X * 16 - 40, 25);
    this.#drawText('Documents', X * 22 - 40, 25);
    this.#drawText('English', X * 28 - 40, 25);
    const otherChecked = [];
    candidateList.forEach((el, i) => {
      if (+el.balance >= 2000) {
        otherChecked.push(Promise.all(
          [
            this.checkAge(el, X * 16, Y * (i + 1)),
            this.checkDocument(el, X * 22, Y * (i + 1)),
            this.checkEnglish(el, X * 28, Y * (i + 1))]
        ));
      }
    });

    const finish = await Promise.any(otherChecked);
    this.#drawText(`${finish[0].name} get visa!!!`, X * 34 - 40, 25);
  }

  checkBalance = async (candidateList) => {
    const time = this.#getRand(10, 5);
    const x = X * 10;
    const y = Y;

    await new Promise((resolve) => {
      this.#drawText('Balance', x - 40, 25);
      candidateList.forEach((el, i) => {
        this.#drawCircle(x, y * (i + 1), time);
      });
      setTimeout(() => {
        resolve(candidateList);
      }, time * 1000);
    });

    const validCandidate = [];
    candidateList.forEach((el, i) => {
      if (+el.balance >= 2000) {
        this.#drawFinalCircle(true, x, y * (i + 1));
        validCandidate.push(el);
      }
      else {
        this.#drawFinalCircle(false, x, y * (i + 1));
      }
    });
    return validCandidate;
  }

  checkAge = (person, x, y) => {
    const time = this.#getRand(3, 1);
    return new Promise((resolve, reject) => {
      this.#drawCircle(x, y, time);
      setTimeout(() => {
        if (+person.age >= 18 && person.age <= 60) {
          this.#drawFinalCircle(true, x, y);
          resolve(person);
        }
        else {
          this.#drawFinalCircle(false, x, y);
          reject(person);
        }
      }, time * 1000);
    });
  }

  checkDocument = (person, x, y) => {
    const time = this.#getRand(20, 10);
    return new Promise((resolve, reject) => {
      this.#drawCircle(x, y, time);
      setTimeout(() => {
        if (person.documents[0] && person.documents[1] && person.documents[2]) {
          this.#drawFinalCircle(true, x, y);
          resolve(person);
        }
        else {
          this.#drawFinalCircle(false, x, y);
          reject(person);
        }
      }, time * 1000);
    });
  }

  checkEnglish = (person, x, y) => {
    const time = this.#getRand(10, 5);
    return new Promise((resolve, reject) => {
      this.#drawCircle(x, y, time);
      setTimeout(() => {
        if (person.enLvl === 'b1' || person.enLvl === 'b2' || person.enLvl === 'c1' || person.enLvl === 'c2') {
          this.#drawFinalCircle(true, x, y);
          resolve(person);
        }
        else {
          this.#drawFinalCircle(false, x, y);
          reject(person);
        }
      }, time * 1000);
    });
  }

  #getRand = (max, min = 0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  #drawCircle = (x, y, time) => {
    const endPercent = 101;
    const circ = Math.PI * 2;
    const quart = Math.PI / 2;
    let curPerc = 0;
    const animate = (current) => {
      this.ctx.beginPath();
      this.ctx.lineWidth = 5;
      this.ctx.strokeStyle = '#fff';
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.arc(x, y, RADIUS, -(quart), ((circ) * current) - quart, false);
      this.ctx.stroke();
      this.ctx.closePath();
      curPerc = curPerc + (1 / (time / 1.7));
      if (curPerc < endPercent) {
        requestAnimationFrame(function () {
          animate(curPerc / 100);
        });
      }
    };
    animate();
  }
  #drawFinalCircle = (isResolve, x, y) => {
    this.ctx.beginPath();
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = isResolve ? 'green' : 'red';
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  #drawText = (text, x, y) => {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText(text, x, y);
    this.ctx.closePath();
  }
}