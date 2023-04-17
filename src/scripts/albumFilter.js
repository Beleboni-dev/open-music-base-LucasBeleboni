import { categories, products } from "./productsData.js"
import { createAlbumElement } from "./render.js"

export function filterByRange() {
    const emptyMessage = document.querySelector(".section__albums-empty");
    const albumsExist = document.querySelector("#albums-exist")
    const span = document.getElementById("range-span")
    const input = document.getElementById("range-input")
    input.value = 240

    input.addEventListener("input", () => {
        const maxPrice = parseFloat(input.value).toFixed(2)
        span.textContent = "Até R$ " + maxPrice

        const filteredAlbums = products.filter(album => album.price <= maxPrice)
        albumsExist.classList.toggle("hide", filteredAlbums.length === 0)
        emptyMessage.classList.toggle("hide", filteredAlbums.length > 0)
        createAlbumElement(filteredAlbums)
    })
}
export function filterAlbums() {
    const emptyMessage = document.querySelector(".section__albums-empty");
    const albumsExist = document.querySelector("#albums-exist")
    const buttons = document.querySelectorAll(".filter-section__button")
    let filteredAlbums = []
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const categoryIndex = categories.indexOf(btn.textContent)
            filteredAlbums = products.filter(album => album.category === categoryIndex)
            if (categoryIndex === 0) {
                filteredAlbums = products
                createAlbumElement(filteredAlbums)
            } else {
                createAlbumElement(filteredAlbums)
            }
            albumsExist.classList.toggle("hide", filteredAlbums.length === 0)
            emptyMessage.classList.toggle("hide", filteredAlbums.length > 0)

        })
    })
}
