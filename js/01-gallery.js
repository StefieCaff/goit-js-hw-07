import { galleryItems } from '../gallery-items.js';
// Change code below this line

//get HTML ELEMENT
const gallery = document.querySelector(".gallery");

//gallery markup from gallery items Array of image objects
const galleryMarkup = galleryItems.map((image) =>
  `<div class="gallery__item">
     <a class="gallery__link" href=${image.original}>
       <img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description} />
    </a>
   </div>`
).join("");

//add gallery html into dom
gallery.insertAdjacentHTML("beforeEnd", galleryMarkup);

//function to delegate click to div through bubbling when image is clicked also method to prevent default link behavior
function selectedImageModal(event) {
  event.preventDefault();
    if (event.target.nodeName !== `IMG`) {
        return;
    }
  const fullSizeImg = event.target.dataset.source;
    
  const imageModal = basicLightbox.create(
        `<img src="${fullSizeImg}"/>`
  )
  imageModal.show();


  imageModal.show(() => document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      imageModal.close();
    }
  }));

  };

 

 //click listening with above function
gallery.addEventListener("click", selectedImageModal);