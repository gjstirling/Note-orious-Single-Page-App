document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();
  document.getElementById("return").style.display = "none"

  const updateNotes = () => {
    let li;
    let lastNote;
    lastNote = notebook.getNotes()[notebook.getNotes().length - 1]
    emojify(lastNote.getText(), notebook.getNotes().indexOf(lastNote))
  };

  function openNotes() {
    document.querySelectorAll('li').forEach(item => { 
      item.addEventListener("click", () => {
        document.getElementById("main").style.display = "none"
        document.getElementById('textHere').innerHTML = item.innerHTML;
        document.getElementById("return").style.display = "block"
        document.getElementById("return").addEventListener("click", () => {
          document.getElementById("main").style.display = "block"
          document.getElementById("textHere").innerHTML = ""
          document.getElementById("return").style.display = "none"
        })
      })
    })
  };

  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
    updateNotes();
  });

  function emojify(text, index) {
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
        li.setAttribute('id', index)
        li.innerHTML = text.emojified_text;
        // small bug sometimes cuts emojis in half (they are of length 2)
        document.getElementById("notesList").insertBefore(li, document.getElementById("notesList").firstChild);
          openNotes(text.emojified_text)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
