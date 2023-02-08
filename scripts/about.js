/**
 * 
 * @param {Object} skills_div Object with all the infomation for a specific skills div / category 
 * @param {String} skills_div.title Name of skill category
 * @param {List<skill>} skills_div.skills list with all the information about the skills (title and percentage)
 * @returns {HTMLDivElement}  
 */
function createSkillsDivNode(skills_div) {
    let skillsDivNode = document.createElement("div");

    let titleNode = document.createElement("h3");
    titleNode.innerHTML = skills_div.title;
    skillsDivNode.appendChild(titleNode);

    skills_div.skills.forEach(function (skill) {
        let div = document.createElement("div");
        div.className = "skill";
        div.innerHTML = `<label>${skill.name}</label><progress value="${skill.percentage}" max="100"></progress>`;
        skillsDivNode.appendChild(div);
    });

    return skillsDivNode;
}

/**
 * @brief creates a grid with all the skils
 * @param {Array<Object>} skills_list list of objects containing all the information for each skill category.
 * @see createSkillsDivNode()
 */
function createSkillsGrid(skills_list) {
    let container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(2, minmax(250px, 1fr))";

    skills_list.forEach(function (skills_div) {
        container.appendChild(createSkillsDivNode(skills_div));
    });

    document.querySelector('.skills').appendChild(container);
}

/**
 * @brief creates timeline for all job / educational experiences  
 * @param {List<experience>} experiences - list of experience objects containing logo, company, title, dates, and description
 */
function createTimeline(experiences) {
    experiences.forEach(function(experience) {
        let timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-left">
                <div class="circle">
                    <img src="${experience.logo}" alt="${experience.company} logo">
                </div>
            </div>
            <div class="timeline-right">
                <h2>${experience.dates}, ${experience.company}</h2>
                <h1>${experience.title}</h1>
                <p>${experience.description}</p>
            </div> 
        `;
        document.querySelector('.career').appendChild(timelineItem);
    });
}