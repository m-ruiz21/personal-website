function createTimeline(experiences) {
    experiences.forEach(function(experience) {
        let timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-left">
                <div class="circle-space">
                    <img src="${experience.logo}" alt="${experience.company} logo">
                </div>
            </div>
            <div class="timeline-right">
                <div class="project-header">
                    <h1>${experience.title}</h1>
                </div>
                <p>${experience.description}</p>
                <ul class="skills-list space-list"></ul>
            </div> 
        `;

        document.body.querySelector('.projects').appendChild(timelineItem);
        
        // adding all the skills
        let skillsList = timelineItem.querySelector('.skills-list');
        experience.skills.forEach(function(skill_name){
            let skill = document.createElement("li");
            skill.innerHTML = skill_name;
            skillsList.appendChild(skill); 
        });

        // check if we need link. if so, add it
        if ("link" in experience) { 
            let button = document.createElement("div");
            button.className = "button-container visit";
            button.innerHTML = `
               <a href=${experience.link}><button>visit</button></a>  
            `;
            timelineItem.querySelector('.project-header').appendChild(button);
            console.log("added link");
        } 
    });
}