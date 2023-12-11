// // import {students} from "./students.js"
// import {header} from "./header.js"
// import{render} from "./render.js"
// import {footer} from "./footer.js"
// import {teachersData} from "./teachers.js"
// render ("#script",teachersData,footer)


// document.querySelector("#home-link").addEventListener("click",()=> {render("#content",content)}) 
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Funktion zum Erstellen von Schülerkarten
    function createStudentCards() {
        const studentContainer = document.getElementById('student'); // Container für Schüler-Tab-Inhalt
        studentContainer.innerHTML = ''; // Leere den Container, um sicherzustellen, dass er leer ist

        // Erstelle zwei Beispielkarten
        const studentCard1 = createStudentCard('John Doe', 'john.doe@example.com');
        const studentCard2 = createStudentCard('Jane Smith', 'jane.smith@example.com');

        // Füge die Karten dem Container hinzu
        studentContainer.appendChild(studentCard1);
        studentContainer.appendChild(studentCard2);
    }

    // Funktion zum Erstellen einer Schülerkarte
    function createStudentCard(name, email) {
        // Erstelle eine Bootstrap-Card
        const card = document.createElement('div');
        card.className = 'card';

        // Füge den Karteninhalt hinzu
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${email}</p>
            </div>
        `;

        return card;
    }

    // Füge einen Event-Listener zum "Students"-Link hinzu
    const studentsTabLink = document.getElementById('nav-students-tab');
    studentsTabLink.addEventListener('click', createStudentCards);
});
