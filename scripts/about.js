function createSkillsDivNode(skills_div) {
    let skillsDivNode = document.createElement("div");

    let titleNode = document.createElement("h2");
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

function createSkillsGrid(skills_list) {
    let container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(2, minmax(250px, 1fr))";

    skills_list.forEach(function (skills_div) {
        container.appendChild(createSkillsDivNode(skills_div));
    });

    document.body.appendChild(container);
}

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
                <h3>${experience.dates}, ${experience.company}</h3>
                <h2>${experience.title}</h2>
                <p>${experience.description}</p>
            </div> 
        `;
        document.body.appendChild(timelineItem);
    });
}