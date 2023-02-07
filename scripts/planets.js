/** 
 * @brief calculates and sets the coordinates for the given planet
 * @param {object} planet
 * @param {number} angle - angle which the planet is currently at
 * @param {number} planetOrbitRadius - distance away from "sun"
*/
function set_coordinates(planet, angle, planetOrbitRadius) {
  const sun = document.querySelector(".sun");
  let relativeRadius = sun.offsetWidth * .5 + planetOrbitRadius; 
  
  planetAngle = (angle % Math.PI) + Math.PI
  planet.style.left = (sun.offsetLeft + Math.cos(planetAngle) * relativeRadius) + "px";
  planet.style.top = ((Math.sin(planetAngle)) * relativeRadius) + "px";
}


/**
 * @brief animates n planets given the planetsData
 * @param {object} planetsData
 * @param {number} planetsData.orbitRadius - sets the distance away from "sun"
 * @param {number} planetsData.angleRatio - sets relative speed. <1 should slow down >1 should speed up. 1 is base speed.
 */
function animate(planetsData) {
  angle += 0.02;

  planetsData.forEach((planetData) => {
    const { orbitRadius, angleRatio } = planetData;
    set_coordinates(planetData.planet, angle * angleRatio, orbitRadius);
  });

  requestAnimationFrame(() => animate(planetsData));
}

/**
 * @brief creates all the planet divs and begins animation
 * @param {object} planetsData
 * @param {number} planetsData.orbitRadius
 * @param {number} planetsData.angleRatio - sets relative speed. <1 should slow down >1 should speed up. 1 is base speed.
 */
function add_planets(planetsData) {
  
  planetsData.forEach((planetData) => {
    const planet = document.createElement("div");
    planet.classList.add("planet");
    planetsContainer.appendChild(planet);
    planetData.planet = planet;
  });

    animate(planetsData);
}

const planetsContainer = document.querySelector("#planets-container");
let angle = 0;
add_planets([
  {
    orbitRadius: 50,
    angleRatio: 1
  },
  {
    orbitRadius: 80,
    angleRatio: .85
  },
  { 
    orbitRadius: 150,
    angleRatio: .7
  }
]);