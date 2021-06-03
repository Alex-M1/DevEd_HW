export default function render(nodes, modal, photos) {
  const { bigPhoto, modalImg, closeBtn, slides, showBtn, popup } = nodes;

  bigPhoto.src = photos[0].urls.regular;

  slides.addEventListener('click', (e) => {
    if (e.target.nodeName === 'IMG') {
      bigPhoto.src = e.target.src;
    }
  });

  photos.forEach((el, i) => {
    const smallPhoto = document.createElement('img');
    smallPhoto.src = el.urls.regular;
    if (i === 0) {
      smallPhoto.setAttribute('class', 'gallery__slides-small active');
    }
    smallPhoto.setAttribute('class', 'gallery__slides-small');
    slides.appendChild(smallPhoto);
  });

  showBtn.addEventListener('click', () => {
    popup.classList.add('hide');
    modal({ modalImg, bigPhoto, closeBtn }, photos);
  });
}