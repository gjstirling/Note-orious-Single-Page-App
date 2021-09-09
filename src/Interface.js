document.addEventListener("DOMContentLoaded", () => {
  updateNotes = () => {
    console.log(notebook.getNotes());
    const testing = JSON.stringify(notebook.getNotes()); // testing = the current notebook in a JSON string form
    console.log("testing:", testing);
    window.localStorage.setItem("test", testing); // sets localstorage key test to the current notebook in JSON form
    document.querySelector("#notesList").innerText = notebook.getNotes();
    // emojify
    // truncate
    // display note on page
    // at the moment objects are being returned
  };

  const notebook = new Notebook();

  const storage = localStorage.getItem("test");
  if (storage) {
    // if there is stuff in local storage
    if (storage.length) {
      //console.log("here");
      const note = new Note(); // create a new note object
      const testText = localStorage.getItem("test");
      //console.log(JSON.parse(testText));
      note.addText(testText); // add contents of local storage test key to note
      notebook.addNote(note);
      updateNotes();
    }
  }

  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
    updateNotes();
  });
});
