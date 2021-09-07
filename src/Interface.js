document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();
  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote)
    notebook.addNote(note)
    document.getElementById("notepad").value = "";
  });
});


