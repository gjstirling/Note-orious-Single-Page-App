// Testing Note

let note;
note = new Note();

// starts with empty string property

expectToEqual(note.getText(), "")

// addText should require at least 1 character

expectToThrowError(() => { 
  note.addText("")
})

// addText should have max 1000 character

expectToThrowError(() => { 
  note.addText("testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  / "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest")
})

// addText should accept text between 1-1000 characters

expectNotToThrowError(() => { 
  note.addText("test")
})