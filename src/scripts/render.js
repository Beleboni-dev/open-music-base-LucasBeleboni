import { products } from "./productsData.js";

export function createAlbumElement(albums) {
  const list = document.querySelector(".albums-list");
  list.innerHTML = ""
  albums.forEach(album => {
    const li = document.createElement("li");
    li.classList.add("albums-card_item");

    const albumImageBox = document.createElement("div");
    albumImageBox.classList.add("card__item-img-box");

    const albumImage = document.createElement("img");
    albumImage.src = album.img;
    albumImage.alt = album.title;

    albumImageBox.appendChild(albumImage);
    li.appendChild(albumImageBox);

    const albumWrapper = document.createElement("div");
    albumWrapper.classList.add("card__item-wrapper");

    const albumBandYear = document.createElement("div");
    albumBandYear.classList.add("card__item-band-year");

    const albumBand = document.createElement("span");
    albumBand.textContent = album.band;
    albumBand.classList.add("card__item-band", "font4-regular");

    const albumYear = document.createElement("span");
    albumYear.textContent = album.year;
    albumYear.classList.add("card__item-year", "font4-regular");

    albumBandYear.appendChild(albumBand);
    albumBandYear.appendChild(albumYear);

    albumWrapper.appendChild(albumBandYear);

    const albumTitle = document.createElement("h2");
    albumTitle.textContent = album.title;
    albumTitle.classList.add("card__item-title", "font2-600");

    albumWrapper.appendChild(albumTitle);

    const albumBuyPrice = document.createElement("div");
    albumBuyPrice.classList.add("card__item-buy-price");

    const albumPrice = document.createElement("span");
    albumPrice.textContent = `R$ ${album.price.toFixed(2)}`;
    albumPrice.classList.add("card__item-price", "font2-600-14");

    const albumButton = document.createElement("button");
    albumButton.textContent = "Comprar";
    albumButton.classList.add("card__item-button","font3-regular");

    albumBuyPrice.appendChild(albumPrice);
    albumBuyPrice.appendChild(albumButton);

    albumWrapper.appendChild(albumBuyPrice);

 
    li.appendChild(albumWrapper);
    list.appendChild(li);
  });
}
