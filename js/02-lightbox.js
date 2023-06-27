import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector("ul.gallery");

const galleryItemsElements = galleryItems
  .map(
    ({ preview, original, description }) => `
      
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
      
    `
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryItemsElements);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
