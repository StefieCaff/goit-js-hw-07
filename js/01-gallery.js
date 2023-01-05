import { galleryItems } from '../gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");
const galleryImage = document.querySelector(".gallery__image");
const selectedImage = galleryImage.dataset.source;

function selectedImageModal(event) {
    event.preventDefault;
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageModal = event.target.dataset.source;
    console.log(imageModal);
 }

gallery.addEventListener("click", selectedImageModal);