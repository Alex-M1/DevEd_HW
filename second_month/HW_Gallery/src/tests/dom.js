export const dom = `
  <div class="container">
    <div class="gallery">
      <div class="gallery__photo">
        <img src alt class="gallery__photo-big" id="bigPhoto">
        <button class="gallery__photo-btn" id="showAll">Show All</button>
      </div>
      <div class="gallery__slides" id="slides">
      </div>
    </div>
    <div class="modal">
      <button class="modal__close" id="close"> ✖</button>
      <img src alt class="modal__image" id="modalImg">
    </div>
  </div>

`;