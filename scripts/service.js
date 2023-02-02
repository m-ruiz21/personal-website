function createTimeline(experiences) {
    experiences.forEach(function(experience) {
        let timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-left">
                <img src="${experience.logo}" alt="${experience.company} logo">
            </div>
            <div class="timeline-right">
                <div class="project-header">
                    <h1>${experience.title}</h1>
                </div>
                <p>${experience.description}</p>
                <ul class="skills-list"></ul>
            </div> 
        `;

        document.body.appendChild(timelineItem);
    });
}