import { filterAlbums } from "./albumFilter.js"
import { removeAccents } from "./removeAccents.js"


export function renderGenres(categories) {
    const buttonsContainer = document.querySelector('.filter-section__buttons-genre')
    categories.forEach(category => {
      const button = document.createElement('button')
      button.textContent = category
      button.classList.add("font3-regular", "filter-section__button")
      button.setAttribute('id', removeAccents(category).toLowerCase())
      buttonsContainer.appendChild(button)
      filterAlbums()
    })
  }
