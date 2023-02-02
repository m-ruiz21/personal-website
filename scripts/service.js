function createTimeline(experiences) {
    experiences.forEach(function(experience) {
        let timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-left">
            <div style="width: 150px">
                <img src="${experience.logo}" alt="${experience.company} logo" style="width:100%">
            </div>
            </div>
            <div class="timeline-right">
            <div class="project-header">
                <h1>${experience.title}</h1>
            </div>
            <p>${experience.description}</p>
            <ul class="skills-list"></ul>
            </div> 
            `;

            document.querySelector('.community-container').appendChild(timelineItem);
        });
    }