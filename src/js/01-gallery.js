// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<a class="gallery__item" href=${item.original}>
        <img
          class="gallery__image"
          src=${item.preview}
          alt=${item.description}
        />
      </a>`,
  ''
);

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onClickImage);

function onClickImage(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
}

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
