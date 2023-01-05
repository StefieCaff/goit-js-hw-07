import { galleryItems } from '../gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");
const galleryImage = document.querySelector(".gallery__image");

console.log(galleryImage.dataset.source);

gallery.addEventListener("click", selectedImage);

function selectedImage(event) {
    event.preventDefault;
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const selectedImage = galleryImage.dataset.source;
}