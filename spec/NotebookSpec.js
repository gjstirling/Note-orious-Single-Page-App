// Testing Notebook

let notebook;
notebook = new Notebook();

expectToEqual(
  Array.isArray(notebook.getNotes()),
  true,
  "starts with an array of notes"
);

expectToEqual(
  notebook.getNotes().length,
  0,
  "starts with an empty array of notes"
);

const note1 = new Note();
notebook.addNote(note1);
notebook.addNote(note1);

expectNotToThrowError(() => {
  notebook.addNote(note1);
}, "addNote only accepts a Note instance as an argument");

expectToThrowError(() => {
  notebook.addNote(4);
}, "addNote only accepts a Note instance as an argument");

expectToThrowError(() => {
  notebook.addNote("And my axe!");
}, "addNote only accepts a Note instance as an argument");

expectToEqual(notebook.getNotes().length, 3, "addNote pushes to notes");

expectToEqual(
  notebook.getNotes(),
  notebook.notes,
  "getNotes returns the notes"
);

expectToEqual(
  notebook.getNotes(),
  "I am a servant of the secret fire",
  "deliberate failed test for demo"
);
