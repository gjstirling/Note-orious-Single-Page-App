// Testing Note

let note;
note = new Note();

expectToEqual(note.getText(), "", "starts with empty string property");

expectToEqual(note.getText(), note.text, "getText returns text property")

expectToThrowError(() => { 
  note.addText("");
}, "addText should require at least 1 character");

// 
  let testText = ""
  for (let i = 0; i < 100; i++) {
    testText += "abcdefghij";
  }

expectNotToThrowError(() => { 
  note.addText(testText)
}, "addText should have max 1000 character")

expectNotToThrowError(() => { 
  note.addText("a");
}, "addText should accept text between 1-1000 characters");

expectNotToThrowError(() => { 
  note.addText("testtesttesttesttesttesttesttesttesttesttesttesttesttesttest");
}, "addText should accept text between 1-1000 characters");

expectToThrowError(() => {
  note.addText(4);
}, "addText should only accept strings");
