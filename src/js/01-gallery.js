
import { galleryItems } from './gallery-items';

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery')


const galleryImages = (imgArray) => {
        return galleryItems.map(({preview, description, original}) => {
    return `
    <div class="gallery__item">
  <a onClick = 'event.preventDefault()' class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('')
} 

let cards = galleryImages(galleryItems)

gallery.insertAdjacentHTML('beforeend', cards)


let lightbox = new SimpleLightbox('.gallery a', {
    
    overlay: true,
    captionDelay: '250ms'
});