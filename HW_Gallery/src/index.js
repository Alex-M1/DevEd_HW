import { render, modal, url, nodeSelectors, getNodes } from './js';
import './styles/index.scss';

window.addEventListener('DOMContentLoaded', async () => {
  const getPhoto = await fetch(url);
  const photos = await getPhoto.json();

  render(getNodes(nodeSelectors), modal, photos);
});