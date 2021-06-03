import { MAX_HEIGHT, MAX_WIDTH } from "../constants"
import { Circle } from "../model"

export default class View {
  constructor() {
    this.circle = null
    this.allCircles = []
  }

  drawOnClick = (el, cb) => {
    el.addEventListener('click', cb)
  }

  drawCircle = (e) => {
    this.circle = new Circle(e.offsetX, e.offsetY)
    this.circle.init()
    this.allCircles.push(this.circle)
  }

  rerender = () => {
    this.allCircles.forEach((el, i, arr) => {
      const
        newX = el.x + (el.speed / 16) * el.dx,
        newY = el.y + (el.speed / 16) * el.dy

      arr.forEach(next => {
        if (el !== next) {
          const
            nextX = next.x + (next.speed / 16) * next.dx,
            nextY = next.y + (next.speed / 16) * next.dy,
            touchpoint = Math.ceil(Math.sqrt(Math.pow((newX - nextX), 2) + Math.pow((newY - nextY), 2)))
          if (Math.floor(touchpoint <= el.radius + next.radius)) {
            const
              elRadDx = Math.cos(Math.acos(el.dx) * 1.57),
              elRadDy = Math.sin(Math.asin(el.dy) * 1.57),
              nextRadDx = Math.cos(Math.acos(next.dx) * 1.57),
              nextRadDy = Math.sin(Math.asin(next.dy) * 1.57)

            el.setDx(-elRadDx)
            el.setDy(-elRadDy)
            next.setDx(-nextRadDx)
            next.setDy(-nextRadDy)
          }
        }
      })
      el.setX(newX)
      el.setY(newY)

      this.fixHorizontal(el)
      this.fixVertical(el)
    })
    requestAnimationFrame(this.rerender)
  }

  fixHorizontal = (el) => {
    const { x, dx, radius } = el
    if (x - radius <= 0 || x + radius >= MAX_WIDTH) {
      el.setDx(dx * -1)
    }
  }

  fixVertical = (el) => {
    const { y, dy, radius } = el
    if (y - radius <= 0 || y + radius >= MAX_HEIGHT) {
      el.setDy(dy * -1)
    }
  }
}

