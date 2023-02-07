/**
 * @brief creates pseudo-component for the navbar for quick editing
 */
function navbar() {
    let navbar= document.createElement("nav");
    navbar.className = "navbar";
    navbar.innerHTML = `
        <a class="logo" href="index.html">
            <img src="assets/common/logo.svg" alt="logo">
        </a>
        <ul class="menu">
            <li><a href="about.html"> About Me </a></li>
            <li><a href="projects.html"> Projects</a></li>
            <li><a href="service.html">Service</a></li>
            <li><a href="ai.html">ChatGPT</a></li>
            <li><button onclick="change_theme()" id="styleButton"></button></li>
        </ul> 
        `
    document.body.appendChild(navbar);
}

/**
 * @brief handles the button to change the theme of the page
 */
function change_theme() {
    let currStylesheet = localStorage.getItem("currStylesheet");
    if (currStylesheet === null || currStylesheet === "styles/space.css") {
        localStorage.setItem("currStylesheet", "styles/app.css");
        document.getElementById("appStyle").setAttribute("href", "styles/app.css");
    } else {
        localStorage.setItem("currStylesheet", "styles/space.css");
        document.getElementById("appStyle").setAttribute("href", "styles/space.css");
    }
}

/**
 * @brief checks state of page theme on load
 */
window.onload = function() {
    let currStylesheet = localStorage.getItem("currStylesheet") || "styles/app.css";
    document.getElementById("appStyle").setAttribute("href", currStylesheet);

};