window.addEventListener("load", () => {

    // Testing the server connection
    console.info('Testing server connection...');

    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerText = data.message;
        })
        .catch(error => {
            console.error("Error connecting to server:", error);
            document.getElementById("message").innerText = "Error loading data.";
        });

    // Fetch skills data from the backend
    fetch("http://localhost:5000/skill")
        .then(response => response.json())
        .then(data => {
            console.log('Skills retrieved', data);

            // Creating a styled HTML list for skills
            let html = `<div class="skills-list">`; // Wrap list in a div for styling
            for (let i = 0; i < data.length; i++) {
                html += `
                    <div class="skill-item">
                        <h3>${data[i].name}</h3>
                        <p>Level: ${data[i].level} / Category: ${data[i].category}</p>
                    </div>
                `;
            }
            document.getElementById("skills").innerHTML = html + `</div>`;
        })
        .catch(error => {
            console.error("Error fetching skill data:", error);
            document.getElementById("skills").innerText = "Error loading skill data.";
        });

    // Fetch project data from the backend
    fetch("http://localhost:5000/project")
        .then(response => response.json())
        .then(data => {
            console.log('Projects retrieved', data);

            // Creating a styled HTML list for projects
            let html = `<div class="projects-list">`;
            for (let i = 0; i < data.length; i++) {
                html += `
                    <div class="project-item">
                        <h3>${data[i].name}</h3>
                        <p>Technologies: ${data[i].technologies.join(", ")}</p>
                        <p>Category: ${data[i].category}</p>
                    </div>
                `;
            }
            document.getElementById("projects").innerHTML = html + `</div>`;
        })
        .catch(error => {
            console.error("Error fetching project data:", error);
            document.getElementById("projects").innerText = "Error loading project data.";
        })
});