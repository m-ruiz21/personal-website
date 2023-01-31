function createTimeline(experiences) {
    experiences.forEach(function(experience) {
        let timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-left">
                <img src="${experience.logo}" alt="${experience.company} logo">
            </div>
            <div class="timeline-right">
                <h2>${experience.title}</h2>
                <p>${experience.description}</p>
            </div> 
        `;
        document.body.appendChild(timelineItem);
    });
}