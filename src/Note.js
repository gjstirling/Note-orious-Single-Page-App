class Note {
  constructor() {
    this.text = "";
  }

  getText() {
    return this.text;
  }

  addText(text) {
    if (this.#isCorrectLength(text) && this.#isStringType(text)) {
     return this.text = text;
    }
    throw new Error();
  }

  #isCorrectLength(text) {
    return (text.length >= 1 && text.length <= 1000);
  }

  #isStringType(text) {
    return typeof text === 'string'
  }
}
