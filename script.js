window.addEventListener("load", () => {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(response => response.json())
    .then(json => {
      const container = document.querySelector("#container");
      let astronauts = "";
      let sorted = json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
      let astroCount = document.getElementById("count");
      astroCount.innerHTML = `# of Astronauts: ${sorted.length}`;

      for (astronaut of sorted) {
        let active = astronaut.active ? "green" : "";
        astronauts += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li class="${active}">Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}"/>
        </div>
        `;
      }
      container.innerHTML = astronauts;
    });
});
