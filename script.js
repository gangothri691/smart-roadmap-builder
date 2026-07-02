
// =======================================
// SMART ROADMAP BUILDER
// SCRIPT.JS - PART 1
// =======================================

let favoriteCareer = "";

function generateRoadmap() {

    let career = document.getElementById("career").value;
    let time = document.getElementById("time").value;
    let result = document.getElementById("result");

    if (career === "Select Career Goal") {
        result.innerHTML = "<h2>Please select a career goal.</h2>";
        return;
    }

    localStorage.setItem("career", career);
    localStorage.setItem("studyTime", time);

    let roadmap = "";

    // ======================
    // JAVA DEVELOPER
    // ======================

    if (career === "Java Developer") {

        roadmap = `
<h2>☕ Java Developer Roadmap</h2>

<label><input type="checkbox" class="task"> Java Basics</label><br><br>
<label><input type="checkbox" class="task"> Variables & Data Types</label><br><br>
<label><input type="checkbox" class="task"> Operators</label><br><br>
<label><input type="checkbox" class="task"> Input & Output</label><br><br>
<label><input type="checkbox" class="task"> If Else</label><br><br>
<label><input type="checkbox" class="task"> Switch</label><br><br>
<label><input type="checkbox" class="task"> Loops</label><br><br>
<label><input type="checkbox" class="task"> Methods</label><br><br>
<label><input type="checkbox" class="task"> Arrays</label><br><br>
<label><input type="checkbox" class="task"> Strings</label><br><br>
<label><input type="checkbox" class="task"> OOP Concepts</label><br><br>
<label><input type="checkbox" class="task"> Constructors</label><br><br>
<label><input type="checkbox" class="task"> Inheritance</label><br><br>
<label><input type="checkbox" class="task"> Polymorphism</label><br><br>
<label><input type="checkbox" class="task"> Abstraction</label><br><br>
<label><input type="checkbox" class="task"> Interface</label><br><br>
<label><input type="checkbox" class="task"> Exception Handling</label><br><br>
<label><input type="checkbox" class="task"> Collections Framework</label><br><br>
<label><input type="checkbox" class="task"> File Handling</label><br><br>
<label><input type="checkbox" class="task"> Multithreading</label><br><br>
<label><input type="checkbox" class="task"> JDBC</label><br><br>
<label><input type="checkbox" class="task"> MySQL</label><br><br>
<label><input type="checkbox" class="task"> Maven</label><br><br>
<label><input type="checkbox" class="task"> Spring Boot</label><br><br>
<label><input type="checkbox" class="task"> REST API</label><br><br>
<label><input type="checkbox" class="task"> Mini Project</label><br><br>
<label><input type="checkbox" class="task"> Final Project</label>
`;

    }

    // ======================
    // WEB DEVELOPER
    // ======================

    else if (career === "Web Developer") {

        roadmap = `
<h2>🌐 Web Developer Roadmap</h2>

<label><input type="checkbox" class="task"> HTML Basics</label><br><br>
<label><input type="checkbox" class="task"> Semantic HTML</label><br><br>
<label><input type="checkbox" class="task"> Forms</label><br><br>
<label><input type="checkbox" class="task"> CSS Basics</label><br><br>
<label><input type="checkbox" class="task"> Colors & Fonts</label><br><br>
<label><input type="checkbox" class="task"> Flexbox</label><br><br>
<label><input type="checkbox" class="task"> CSS Grid</label><br><br>
<label><input type="checkbox" class="task"> Responsive Design</label><br><br>
<label><input type="checkbox" class="task"> Bootstrap</label><br><br>
<label><input type="checkbox" class="task"> JavaScript Basics</label><br><br>
<label><input type="checkbox" class="task"> DOM Manipulation</label><br><br>
<label><input type="checkbox" class="task"> Events</label><br><br>
<label><input type="checkbox" class="task"> ES6</label><br><br>
<label><input type="checkbox" class="task"> Async JavaScript</label><br><br>
<label><input type="checkbox" class="task"> Fetch API</label><br><br>
<label><input type="checkbox" class="task"> Git & GitHub</label><br><br>
<label><input type="checkbox" class="task"> React</label><br><br>
<label><input type="checkbox" class="task"> React Router</label><br><br>
<label><input type="checkbox" class="task"> Node.js</label><br><br>
<label><input type="checkbox" class="task"> Express.js</label><br><br>
<label><input type="checkbox" class="task"> MongoDB</label><br><br>
<label><input type="checkbox" class="task"> Authentication</label><br><br>
<label><input type="checkbox" class="task"> Deployment</label>
`;

    }
        // ======================
    // PYTHON DEVELOPER
    // ======================

    else if (career === "Python Developer") {

        roadmap = `
<h2>🐍 Python Developer Roadmap</h2>

<label><input type="checkbox" class="task"> Python Basics</label><br><br>
<label><input type="checkbox" class="task"> Variables</label><br><br>
<label><input type="checkbox" class="task"> Data Types</label><br><br>
<label><input type="checkbox" class="task"> Operators</label><br><br>
<label><input type="checkbox" class="task"> Input & Output</label><br><br>
<label><input type="checkbox" class="task"> If Else</label><br><br>
<label><input type="checkbox" class="task"> Loops</label><br><br>
<label><input type="checkbox" class="task"> Functions</label><br><br>
<label><input type="checkbox" class="task"> Lists</label><br><br>
<label><input type="checkbox" class="task"> Tuples</label><br><br>
<label><input type="checkbox" class="task"> Dictionaries</label><br><br>
<label><input type="checkbox" class="task"> Sets</label><br><br>
<label><input type="checkbox" class="task"> OOP</label><br><br>
<label><input type="checkbox" class="task"> Exception Handling</label><br><br>
<label><input type="checkbox" class="task"> File Handling</label><br><br>
<label><input type="checkbox" class="task"> Modules & Packages</label><br><br>
<label><input type="checkbox" class="task"> NumPy</label><br><br>
<label><input type="checkbox" class="task"> Pandas</label><br><br>
<label><input type="checkbox" class="task"> Matplotlib</label><br><br>
<label><input type="checkbox" class="task"> Flask</label><br><br>
<label><input type="checkbox" class="task"> Django</label><br><br>
<label><input type="checkbox" class="task"> REST APIs</label><br><br>
<label><input type="checkbox" class="task"> SQL</label><br><br>
<label><input type="checkbox" class="task"> Final Project</label>
`;

    }

    // ======================
    // AI / ML ENGINEER
    // ======================

    else {

        roadmap = `
<h2>🤖 AI / ML Engineer Roadmap</h2>

<label><input type="checkbox" class="task"> Python</label><br><br>
<label><input type="checkbox" class="task"> NumPy</label><br><br>
<label><input type="checkbox" class="task"> Pandas</label><br><br>
<label><input type="checkbox" class="task"> Data Visualization</label><br><br>
<label><input type="checkbox" class="task"> Statistics</label><br><br>
<label><input type="checkbox" class="task"> Probability</label><br><br>
<label><input type="checkbox" class="task"> Linear Algebra</label><br><br>
<label><input type="checkbox" class="task"> Calculus Basics</label><br><br>
<label><input type="checkbox" class="task"> Scikit-learn</label><br><br>
<label><input type="checkbox" class="task"> Machine Learning</label><br><br>
<label><input type="checkbox" class="task"> Regression</label><br><br>
<label><input type="checkbox" class="task"> Classification</label><br><br>
<label><input type="checkbox" class="task"> Clustering</label><br><br>
<label><input type="checkbox" class="task"> Deep Learning</label><br><br>
<label><input type="checkbox" class="task"> TensorFlow</label><br><br>
<label><input type="checkbox" class="task"> PyTorch</label><br><br>
<label><input type="checkbox" class="task"> NLP</label><br><br>
<label><input type="checkbox" class="task"> Computer Vision</label><br><br>
<label><input type="checkbox" class="task"> Model Deployment</label><br><br>
<label><input type="checkbox" class="task"> MLOps Basics</label><br><br>
<label><input type="checkbox" class="task"> Capstone Project</label>
`;

    }

    result.innerHTML = roadmap;

    updateEstimate(time);

    let tasks = document.querySelectorAll(".task");

    tasks.forEach((task, index) => {

        if (localStorage.getItem("task" + index) == "true") {
            task.checked = true;
        }

        task.addEventListener("change", function () {

            localStorage.setItem("task" + index, this.checked);

            updateProgress();

        });

    });

    updateProgress();

}
// =======================================
// PROGRESS BAR
// =======================================

function updateProgress() {

    let tasks = document.querySelectorAll(".task");
    let completed = 0;

    tasks.forEach(task => {
        if (task.checked) {
            completed++;
        }
    });

    let percentage = Math.round((completed / tasks.length) * 100);

    if (isNaN(percentage)) {
        percentage = 0;
    }

    document.getElementById("progressText").innerHTML =
        "Progress : " + percentage + "%";

    document.getElementById("progressBar").style.width =
        percentage + "%";

    if (percentage === 100 && tasks.length > 0) {

        setTimeout(function () {

            alert("🎉 Congratulations!\n\nYou completed your roadmap!");

        }, 300);

    }

}

// =======================================
// ESTIMATED COMPLETION
// =======================================

function updateEstimate(time) {

    let estimate = document.getElementById("estimate");

    if (time === "1 Hour / Day") {

        estimate.innerHTML = "Estimated Completion : 8 Months";

    }

    else if (time === "2 Hours / Day") {

        estimate.innerHTML = "Estimated Completion : 4 Months";

    }

    else {

        estimate.innerHTML = "Estimated Completion : 2 Months";

    }

}

// =======================================
// DARK MODE
// =======================================

function darkMode() {

    document.body.classList.toggle("dark");

}

// =======================================
// FAVORITE ROADMAP
// =======================================

function favoriteRoadmap() {

    let career = document.getElementById("career").value;

    if (career === "Select Career Goal") {

        alert("Please generate a roadmap first.");
        return;

    }

    favoriteCareer = career;

    localStorage.setItem("favoriteCareer", career);

    alert("❤️ " + career + " added to Favorites!");

}

// =======================================
// CERTIFICATE DOWNLOAD
// =======================================

function downloadCertificate() {

    let text = `SMART ROADMAP BUILDER

Certificate of Completion

Congratulations!

You have successfully completed your learning roadmap.

Keep Learning 🚀`;

    let blob = new Blob([text], {
        type: "text/plain"
    });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Certificate.txt";

    link.click();

}
// =======================================
// PAGE LOAD
// =======================================

window.onload = function () {

    // Restore favorite
    let fav = localStorage.getItem("favoriteCareer");

    if (fav) {
        favoriteCareer = fav;
    }

    // Search Career
    let search = document.getElementById("searchCareer");

    if (search) {

        search.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            let select = document.getElementById("career");

            for (let i = 1; i < select.options.length; i++) {

                if (select.options[i].text.toLowerCase().includes(value)) {

                    select.selectedIndex = i;
                    break;

                }

            }

        });

    }

    // Restore last selected career
    let savedCareer = localStorage.getItem("career");
    let savedTime = localStorage.getItem("studyTime");

    if (savedCareer) {
        document.getElementById("career").value = savedCareer;
    }

    if (savedTime) {
        document.getElementById("time").value = savedTime;
    }

}

// =======================================
// RESET ROADMAP
// =======================================

function resetRoadmap() {

    localStorage.clear();

    document.getElementById("career").selectedIndex = 0;
    document.getElementById("level").selectedIndex = 0;
    document.getElementById("time").selectedIndex = 0;

    document.getElementById("result").innerHTML =
        "<h2>Your Roadmap will appear here 🚀</h2><p>Select your options and click <b>Generate Roadmap</b>.</p>";

    document.getElementById("progressText").innerHTML = "Progress : 0%";
    document.getElementById("progressBar").style.width = "0%";

    document.getElementById("estimate").innerHTML =
        "Select your study time.";

    alert("Roadmap has been reset!");

}

// =======================================
// END OF SCRIPT
// =======================================