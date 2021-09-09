document.addEventListener("DOMContentLoaded", () => {
  getStorage = (storage) => {
    const parsedStorage = JSON.parse(storage);
    parsedStorage.forEach((element) => {
      newNote(element.text);
    });
  };

  updateNotes = () => {
    const storedNotes = JSON.stringify(notebook.getNotes());
    window.localStorage.setItem("storedNotes", storedNotes);
    showNotes();
  }

  showNotes = () => {
    document.querySelector("#notesList").innerText = notebook.getNotes();
  };

  newNote = (text) => {
    const note = new Note();
    note.addText(text);
    notebook.addNote(note);
  };

  const notebook = new Notebook();
  const storage = window.localStorage.getItem("storedNotes");
  if (storage && storage.length) {
    getStorage(storage);
  }
  updateNotes();

  document.querySelector("#addNote").addEventListener("click", () => {
    const text = document.getElementById("notepad").value;
    newNote(text);
    document.getElementById("notepad").value = "";
    updateNotes();
  });
});
