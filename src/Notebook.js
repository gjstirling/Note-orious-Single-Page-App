class Notebook {

  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    if (note instanceof Note) {
      return this.notes.push(note);
    } 
    throw new Error();
  }
}