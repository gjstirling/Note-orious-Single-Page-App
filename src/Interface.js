document.addEventListener("DOMContentLoaded", () => {
  updateNotes = () => {
    document.querySelector("#notesList").innerText = notebook.getNotes();
  };

  const notebook = new Notebook();

  // on page load check if anything in storage?
  // if so: give it to page - process storage string and give it to updateNotes()

  // processing the storage string - if it is a notebook string?
  // iterate over each hash in the string - extract the text, id whatever
  // push each 'element' using note.addText(newNote) --> notebook.addNote

  // if not ?

  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
    updateNotes();
  });
});
