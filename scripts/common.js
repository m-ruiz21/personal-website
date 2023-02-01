function navbar() {
    let navbar= document.createElement("nav");
    navbar.className = "navbar";
    navbar.innerHTML = `
        <a class="logo" href="index.html">
            <img src="assets/common/logo.svg" alt="logo">
        </a>
        <ul id="js-menu">
            <li><a href="about.html"> About Me </a></li>
            <li><a href="projects.html"> Projects</a></li>
            <li><a href="service.html">Service</a></li>
            <li><a href="ai.html">ChatGPT</a></li>
        </ul> 
        `
    document.body.appendChild(navbar);
}