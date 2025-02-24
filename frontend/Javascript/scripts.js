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

            // Creating an HTML list for skills
            let html = `<ul style="list-style-type: none; padding: 0; margin: 0;">`;  // Applying style directly here
            for (let i = 0; i < data.length; i++) {
                html += `<li>${data[i].name} - ${data[i].level} - ${data[i].category}</li>`;
            }
            document.getElementById("skills").innerHTML = html + `</ul>`;
        })
        .catch(error => {
            console.error("Error fetching skill data:", error);
            document.getElementById("skills").innerText = "Error loading skill data.";
        });


    // Fetch project data from the backend
    fetch("http://localhost:5000/project")
        .then(response => response.json())
        .then(data => {
            console.log('projects retrieved', data);

            // Creating an HTML list for skills
            let html = `<ul style="list-style-type: none; padding: 0; margin: 0;">`;
            for (let i = 0; i < data.length; i++) {
                html += `<li>${data[i].name} - ${data[i].technologies} - ${data[i].category}</li>`;
            }
            document.getElementById("projects").innerHTML = html + `</ul>`;
        })
        .catch(error => {
            console.error("Error fetching skill data:", error);
            document.getElementById("projects").innerText = "Error loading project data.";
        })
    });