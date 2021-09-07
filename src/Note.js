class Note {
  constructor() {
    this.text = ""
  }

  getText() {
    return this.text
  }

  addText(text) {
    if (this.#minChars(text) && this.#maxChars(text)) {
     return this.text = text
    }
    throw new Error()
  }

  #minChars(text) {
    return text.length >= 1
  }

  #maxChars(text) {
    return text.length <= 1000
  }
}