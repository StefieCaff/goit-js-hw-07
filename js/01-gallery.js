import { galleryItems } from '../gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function selectedImageModal(event) {
  event.preventDefault;
    if (event.target.nodeName !== `IMG`) {
        return;
    }
  const fullSizeImg = event.target.dataset.source;
    
  const imageModal = basicLightbox.create(
        `<img src="${fullSizeImg}"/>`
  )
  imageModal.show()
 }

gallery.addEventListener("click", selectedImageModal);



