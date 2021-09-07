document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#addNote").addEventListener("click", () => {
    const newNote = document.getElementById("notepad").value;
    document.getElementById("notepad").value = "";
  });
});
