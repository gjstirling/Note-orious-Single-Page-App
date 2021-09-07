// Testing Notebook

let notebook;
notebook = new Notebook();

// starts with an array of notes
expectToEqual(Array.isArray(notebook.getNotes()), true)

// starts with an empty array of notes
expectToEqual(notebook.getNotes().length, 0)

// addNotes only accepts a Note instance as an argument
// expectNotToThrowError(() => {
//   notebook.addNote(note instance!!);
// })

expectToThrowError(() => {
  notebook.addNote(4);
})

expectToThrowError(() => {
  notebook.addNote("And my axe!");
})

// getNotes returns the notes
const note1 = new Note();
const note2 = new Note();
notebook.addNote(note1);
notebook.addNote(note2);
expectToEqual(notebook.getNotes().length, 2);
expectToEqual(notebook.getNotes(), notebook.notes);
