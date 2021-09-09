document.addEventListener("DOMContentLoaded", () => {
  updateNotes = () => {
    document.querySelector("#notesList").innerText = notebook.getNotes();
  };

  const notebook = new Notebook();

  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
    updateNotes();
  });
});
