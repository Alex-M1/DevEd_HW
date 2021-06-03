export default class Paint {
  constructor({ canvas, size, radius, color, download, clear }) {
    this.canvas = document.querySelector(canvas)
    this.size = document.querySelector(size)
    this.radius = document.querySelector(radius)
    this.color = document.querySelector(color)
    this.download = document.querySelector(download)
    this.clearBtn = document.querySelector(clear)

    this.ctx = this.canvas.getContext('2d')
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = this.size.value
    this.coords = []
  }

  draw = (e) => {
    const
      x = e.offsetX,
      y = e.offsetY,
      dx = e.movementX,
      dy = e.movementY

    if (e.buttons === 1) {
      this.coords.push({
        x, y, dx, dy,
        radius: this.ctx.lineWidth,
        color: this.ctx.strokeStyle
      })
      this.ctx.beginPath()
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x - dx, y - dy);
      this.ctx.stroke();
      this.ctx.fill()
      this.ctx.closePath();
    }
  }

  setSize = (e) => {
    this.ctx.lineWidth = e.target.value
    this.radius.textContent = e.target.value
  }

  setColor = (e) => {
    this.ctx.strokeStyle = e.target.value
  }

  paintEvent = (elem, event, cb) => {
    elem.addEventListener(event, cb)
  }

  save = () => {
    const
      code = 'data:text/json;charset=utf-8',
      dataStr = `${code},${encodeURIComponent(JSON.stringify(this.coords))}`

    this.download.href = dataStr
    this.download.download = 'canvas.json'
  }

  clear = () => {
    this.coords.length = 0
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
