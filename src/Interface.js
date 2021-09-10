document.addEventListener("DOMContentLoaded", () => {
  const updateNotes = () => {
    let li;
    let lastNote;
    lastNote = notebook.getNotes()[notebook.getNotes().length - 1];
    emojify(lastNote.getText(), notebook.getNotes().indexOf(lastNote));
    sleep(90);
  };

  function openNotes() {
    document.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        document.getElementById("main").style.display = "none";
        document.getElementById("textHere").innerHTML =
          item.getAttribute("fullText");
        document.getElementById("return").style.display = "block";
        document.getElementById("return").addEventListener("click", () => {
          document.getElementById("main").style.display = "block";
          document.getElementById("textHere").innerHTML = "";
          document.getElementById("return").style.display = "none";
        });
      });
    });
  }

  getStorage = (storage) => {
    const parsedStorage = JSON.parse(storage);
    parsedStorage.forEach((element) => {
      newNote(element.text);
      updateNotes();
    });
  };

  replaceLocalStorage = () => {
    const storedNotes = JSON.stringify(notebook.getNotes());
    window.localStorage.setItem("storedNotes", storedNotes);
  };

  newNote = (text) => {
    const note = new Note();
    note.addText(text);
    notebook.addNote(note);
  };

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
        li = document.createElement("li");
        li.setAttribute("id", index);
        li.setAttribute("fullText", text.emojified_text);
        li.innerHTML = text.emojified_text.substring(0, 20);
        // small bug sometimes cuts emojis in half (they are of length 2)
        document
          .getElementById("notesList")
          .insertBefore(li, document.getElementById("notesList").firstChild);
        openNotes(text.emojified_text);
        replaceLocalStorage();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const notebook = new Notebook();
  const storage = window.localStorage.getItem("storedNotes");
  if (storage && storage.length) {
    getStorage(storage);
  }
  document.getElementById("return").style.display = "none";

  document.querySelector("#addNote").addEventListener("click", () => {
    const text = document.getElementById("notepad").value;
    newNote(text);
    document.getElementById("notepad").value = "";
    updateNotes();
  });

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
});
