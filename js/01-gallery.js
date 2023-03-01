import { galleryItems } from './gallery-items.js';
function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description || 'Imagen'}"/>    
        </a>
      </div>
    `;
    
  }).join('');

     document.querySelector('gallery__image').onclick = () => {

const modal = basicLightbox.create(`
      <img src="${original}">
    `);
    modal.show();
  }
}
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);


const galleryImages = document.querySelectorAll('.gallery__image');
galleryImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();
    const source = image.dataset.source;
    const alt = image.alt;
    const instance = basicLightbox.create(`
      <img src="${source}" alt="${alt}" />
    `);
    instance.show();
  });
});