// Testing Notebook

let notebook;
notebook = new Notebook();

// starts with an array of notes
expectToEqual(Array.isArray(notebook.getNotes()), true)

// starts with an empty array of notes
expectToEqual(notebook.getNotes().length, 0)

// addNotes
const note1 = new Note();
notebook.addNote(note1);
notebook.addNote(note1);

// addNote only accepts a Note instance as an argument

expectNotToThrowError(() => {
  notebook.addNote(note1);
})

expectToThrowError(() => {
  notebook.addNote(4);
})

expectToThrowError(() => {
  notebook.addNote("And my axe!");
})

// addNote pushes to notes
expectToEqual(notebook.getNotes().length, 3);

// getNotes returns the notes
expectToEqual(notebook.getNotes(), notebook.notes);
