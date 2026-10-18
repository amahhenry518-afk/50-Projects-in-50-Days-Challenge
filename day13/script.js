
const noteForm = document.getElementById('note-form');
const noteTitle = document.getElementById('note-title');
const noteContent = document.getElementById('note-content');
const notesContainer = document.getElementById('notes-container');


let notes = JSON.parse(localStorage.getItem('notes')) || [];


function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}


function displayNotes() {
    
    notesContainer.innerHTML = '';

    if (notes.length === 0) {
        notesContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">No notes added yet. Create one above!</p>`;
        return;
    }

    
    notes.forEach((note) => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        noteCard.innerHTML = `
            <h3>${escapeHTML(note.title)}</h3>
            <p>${escapeHTML(note.content)}</p>
            <button class="delete-btn" onclick="deleteNote(${note.id})" title="Delete Note">✕</button>
        `;

        notesContainer.appendChild(noteCard);
    });
}


function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}


noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleValue = noteTitle.value.trim();
    const contentValue = noteContent.value.trim();

    if (!titleValue || !contentValue) return;
    const newNote = {
        id: Date.now(), 
        title: titleValue,
        content: contentValue
    };

    
    notes.push(newNote);
    saveNotes();
    displayNotes();


    noteForm.reset();
    noteTitle.focus();
});

window.deleteNote = function(id) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    displayNotes();
};


displayNotes();
