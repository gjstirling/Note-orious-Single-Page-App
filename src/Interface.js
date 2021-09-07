document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();
  updateNotes = () => {
    document.querySelector("#notesList").innerText = notebook.getNotes();
    // at the moment objects are being returned 
    // we need strings seperated by new lines 
    // back-end ???
    console.log(notebook.getNotes());
  }
  updateNotes();
  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    // could notes be intialized with text 
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
  updateNotes();
  });
});


