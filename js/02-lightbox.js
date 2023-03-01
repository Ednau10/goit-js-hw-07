import { galleryItems } from './gallery-items.js';
// Change code below this line

  function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description || 'Image'}" />    
              <div class="gallery__caption">${description || 'Image'}</div>
            </a>
          </div>
        `;
      })
      .join('');
  }
  
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
  // const gallery = new SimpleLightbox('.gallery a', {
  //   captions: true,
  //   captionDelay: 250,
  //   captionsData: 'alt',
  //   createGalleryMarkup,

  // });
  const gallery = new SimpleLightbox('.gallery a');

  gallery.on('.show.simpleligthbox'), function(){
    createGalleryMarkup();
    console.log("imagenes");
  };

  gallery.on('error.simplelightbox', function(e) {
    console.log(e);
  })

