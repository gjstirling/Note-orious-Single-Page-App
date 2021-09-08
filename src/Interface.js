document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();
  updateNotes = () => {
    document.querySelector("#notesList").innerText = notebook.getNotes();
    // emojify 
    // truncate 
    // display note on page
    // at the moment objects are being returned 
    console.log(notebook.getNotes());
  }
  updateNotes();
  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
  updateNotes();
  });
});


