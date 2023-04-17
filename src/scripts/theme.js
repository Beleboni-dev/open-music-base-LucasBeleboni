
export function setTheme(){
    const btnTheme = document.getElementById("btn-theme")
    const htmlElement = document.querySelector("html")
    btnTheme.addEventListener("click", ()=>{
        htmlElement.classList.toggle("dark-mode")
        const darkMode = htmlElement.classList.contains("dark-mode")
        btnTheme.innerHTML = darkMode ? '<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'
        localStorage.setItem("darkMode", darkMode)
    })
}

export function themePreference(){
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    if(isDarkMode){
        document.querySelector("html").classList.add("dark-mode")
        document.querySelector("#btn-theme").innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
}   