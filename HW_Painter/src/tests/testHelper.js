export const
  dom =
    `
    <canvas width="500" height="500"></canvas>
    <div class="setting">
      <div>
        <p>Radius <span class="radius">10</span> px</p>
        <input type="range" id="size" min="1" max="50" value="10">
      </div>
      <div class="choose-color">
        <p>Choose color</p>
        <input type="color" id="color">
      </div>
      <button class="btn" id="clear">Clear</button>
      <a href class="btn" id="download" download>Save</a>
    </div>
  `,
  options = {
    canvas: 'canvas',
    color: '#color',
    size: '#size',
    radius: '.radius',
    download: '#download',
    clear: '#clear'
  },
  event = {
    target: { value: 20 },
    offsetX: 20,
    offsetY: 20,
    movementX: 30,
    movementY: 30,
    buttons: 1
  }
