import { galleryItems } from '../gallery-items.js';
// Change code below this line

console.log(galleryItems);

//get HTML ELEMENT
const gallery = document.querySelector(".gallery");

//gallery markup from gallery items Array of image objects
const galleryMarkup = galleryItems.map((image) =>
  `<a class="gallery__item" href=${image.original}>
     <img class="gallery__image" src=${image.preview} alt=${image.description} />
   </a>`
).join(" ");

//add gallery html into dom
gallery.insertAdjacentHTML("beforeEnd", galleryMarkup);

//function to delegate click to div through bubbling when any image is clicked also method to prevent default link behavior
function selectedImageLibraryModal(event) {
  event.preventDefault();
    
  if (event.target.nodeName !== `A`) {
    return;
  }
};

// initialize simple lightbox image library
let imageLibraryModal = new SimpleLightbox('.gallery a');


//add click event for div/img delegation 
gallery.addEventListener("click", selectedImageLibraryModal);