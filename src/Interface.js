document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();

  const updateNotes = () => {
    document.getElementById("notesList").innerHTML = ''
    notebook.getNotes().forEach((element, index) => {
      let li;
      emojify(element.getText(), index)
    });
    // const ascending = (a,b) => a.id - b.id
    // document.getElementById("notesList").sort(ascending)
    // console.log(notebook.getNotes())
    // console.log(document.getElementById("notesList").children)
    // let sorted;
    // sorted = Array.from(document.getElementById("notesList").children).sort((a, b) => { return b.getAttribute('id') - a.getAttribute('id') })
    // document.getElementById("notesList").innerHTML = ""
    // console.log(document.getElementById("notesList").children)
    // sorted.forEach(e => document.getElementById("notesList").appendChild(e))
    // console.log(document.getElementById("notesList").children)
  };

  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    const note = new Note();
    note.addText(newNote);
    notebook.addNote(note);
    document.getElementById("notepad").value = "";
    updateNotes();
  });

  for (i = 0; i < notebook.getNotes().length; i++) {
    document.getElementById(i).addEventListener("click", () => {
    console.log(i);
    });
  }

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
        li.innerHTML = text.emojified_text.substring(0,20);
        console.log(text.emojified_text.substring(0,20))
        // small bug sometimes cuts emojis in half (they are of length 2)
        document.getElementById("notesList").appendChild(li)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});


