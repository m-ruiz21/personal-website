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
            <li><button id="styleButton"></button></li>
        </ul> 
        `
    document.body.appendChild(navbar);
}

function select_theme() {
    document.getElementById("styleButton").addEventListener("click", function(){
        let currStylesheet = localStorage.getItem("currentStylesheet");
        if (currStylesheet === "app.css" || currStylesheet == null) {
            localStorage.setItem("currStylesheet", "app.css");
            document.getElementById("appStyle").setAttribute("href", "app.css");
        } else {
            localStorage.setItem("currStylesheet", "space.css");
            document.getElementById("appStyle").setAttribute("href", "space.css");
        }
    });

    document.getElementById("appStyle").setAttribute("href", localStorage.getItem("currentStylesheet"));
}