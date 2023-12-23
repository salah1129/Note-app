let notes = document.querySelector(".notes");
let add = document.querySelector(".add");

if (localStorage.getItem("notes")) {
    let noteValues = localStorage.getItem("notes").split(" ; ");

    noteValues.forEach(function (noteValue) {
        createNoteElement(noteValue);
    });
}

function createNoteElement(noteValue) {
    let newNote = document.createElement("textarea");
    newNote.value = noteValue;
    notes.appendChild(newNote);
    newNote.placeholder = "Add note...";
    newNote.rows = "10";
    newNote.addEventListener("input", function () {
        updateLocalStorage();
    });
    newNote.addEventListener("dblclick", function () {
        newNote.remove();
        updateLocalStorage();
    });
}

function addNote() {
    let newNote = document.createElement("textarea");
    notes.appendChild(newNote);
    newNote.placeholder = "Add note...";
    newNote.rows = "10";
    newNote.addEventListener("input", function () {
        updateLocalStorage();
    });
    newNote.addEventListener("dblclick", function () {
        newNote.remove();
        updateLocalStorage();
    });
}

function updateLocalStorage() {
    let noteInputs = document.querySelectorAll(".notes textarea");
    let noteValues = [];

    noteInputs.forEach((note) => {
        noteValues.push(note.value);
    });

    localStorage.setItem("notes", noteValues.join(" ; "));
}

add.addEventListener("click", addNote);
