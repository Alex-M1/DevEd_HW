import './styles/style.css'
import Paint from './modules/Paint'

window.addEventListener('DOMContentLoaded', () => {
  const options = {
    canvas: 'canvas',
    color: '#color',
    size: '#size',
    radius: '.radius',
    download: '#download',
    clear: '#clear'
  }
  const paint = new Paint(options)

  paint.paintEvent(paint.canvas, 'mousemove', paint.draw)
  paint.paintEvent(paint.size, 'input', paint.setSize)
  paint.paintEvent(paint.color, 'input', paint.setColor)
  paint.paintEvent(paint.download, 'click', paint.save)
  paint.paintEvent(paint.clearBtn, 'click', paint.clear)

})
