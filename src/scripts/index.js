import { filterAlbums, filterByRange } from "./albumFilter.js";
import { renderGenres } from "./genreSelections.js";
import { categories, products } from "./productsData.js";
import { createAlbumElement } from "./render.js";
import { setTheme, themePreference } from "./theme.js";

init()

function init(){
    createAlbumElement(products)
    themePreference()
    setTheme()
    filterByRange()
    renderGenres(categories)
}