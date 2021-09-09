document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();

  const updateNotes = () => {
    // get notes text in reverse
    // for each note, emojify and truncate
    // for each note, display as list item with id]
    document.getElementById("notesList").innerHTML = ""
    let li;
    let notes = notebook.getNotes().reverse()
    notes.forEach((element) => {
      emojify(element.getText())
    });
  };

  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.getNotes().reverse()
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
    updateNotes();
  });

  function emojify(text) {
    fetch("https://makers-emojify.herokuapp.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((text) => {
        li = document.createElement('li')
        li.innerHTML = text.emojified_text;
        document.getElementById("notesList").appendChild(li)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});


