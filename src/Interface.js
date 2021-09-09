document.addEventListener("DOMContentLoaded", () => {
  getStorage = (storage) => {
    // const storage = window.localStorage.getItem("stringifiedNotes");
    const parsedStorage = JSON.parse(storage);
    parsedStorage.forEach((element) => {
      newNote(element.text);
    });
  };

  updateNotes = () => {
    const stringifiedNotes = JSON.stringify(notebook.getNotes());
    window.localStorage.setItem("stringifiedNotes", stringifiedNotes);
    // console.log(window.localStorage.getItem("stringifiedNotes"));

    document.querySelector("#notesList").innerText = notebook.getNotes();
  };

  newNote = (text) => {
    const note = new Note();
    note.addText(text);
    notebook.addNote(note);
  };

  // on every page load.
  const notebook = new Notebook();
  const storage = window.localStorage.getItem("stringifiedNotes");
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
