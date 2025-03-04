const noteBox = document.querySelector(".note-box");
const btn = document.querySelector(".btn");

let saveNote = JSON.parse(localStorage.getItem('notes')) || [];

function loadNotes() {
    noteBox.innerHTML = ""; 
    saveNote.forEach((noteText, i) => {
        let note = document.createElement("p");
        note.contentEditable = "true";
        note.className = "input-box";
        note.innerHTML = `<div onclick="deleteNote(${i})">🗑️</div> ${noteText}`;

        note.addEventListener("input", () => updateNotes(i, note.innerText));

        noteBox.appendChild(note);
    });
}

btn.addEventListener("click", () => {
    saveNote.push(""); 
    saveToS();
    loadNotes();
});

function updateNotes(i, text) {
    saveNote[i] = text;
    saveToS();
}

function deleteNote(i) {
    saveNote.splice(i, 1);
    saveToS();
    loadNotes();
}

function saveToS() {
    localStorage.setItem('notes', JSON.stringify(saveNote));
}


loadNotes();


