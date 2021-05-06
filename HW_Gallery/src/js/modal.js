export default function modal({ modalImg, closeBtn, bigPhoto }, photos) {
  modalImg.src = bigPhoto.src;
  let photoIndex = 0;
  const interval = setInterval(() => {
    if (photoIndex >= photos.length) {
      photoIndex = 0;
    }
    modalImg.src = photos[photoIndex].urls.regular;
    photoIndex++;
  }, 3000);

  closeBtn.addEventListener('click', (e) => {
    clearInterval(interval);
    e.target.parentElement.classList.remove('hide');
  });
}
