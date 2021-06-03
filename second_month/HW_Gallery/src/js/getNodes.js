const getNodes = ({ bigPhotoSelector, slidesSelector, showSelector, close, img, modalSelector }) => ({
  modalImg: document.querySelector(img),
  closeBtn: document.querySelector(close),
  bigPhoto: document.querySelector(bigPhotoSelector),
  slides: document.querySelector(slidesSelector),
  showBtn: document.querySelector(showSelector),
  popup: document.querySelector(modalSelector)
});

export default getNodes;