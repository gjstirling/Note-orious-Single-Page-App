document.addEventListener("DOMContentLoaded", () => {
  getStorage = storage => {

  }

  updateNotes = () => {
    const stringifiedNotes = JSON.stringify(notebook.getNotes());
    window.localStorage.setItem("notes", stringifiedNotes);
    document.querySelector("#notesList").innerText = notebook.getNotes();
  };

  updateStorage = () => {
    window.localStorage.setItem("stringifiedNotes", notebook.getNotes())
  }

  newNote = text => {
    const note = new Note();
    note.addText(text);
    notebook.addNote(note);
  }

  // on every page load.
  const notebook = new Notebook();
  getStorage();
  updateNotes();  

  document.querySelector("#addNote").addEventListener("click", () => {
    const text = document.getElementById("notepad").value;
    newNote(text);
    document.getElementById("notepad").value = "";
    updateStorage();
    updateNotes();
  });
});
