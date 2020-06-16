module.exports = Phrase;

// Adds 'reverse' to all strings.

String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

//Defines a Phrase object (class).

function Phrase(content) {
  this.content = content;

  this.letters = function letters() {
    let theLetters = [];
    const letterRegex = /[a-zA-Z]/g;
    for (let i = 0; i < this.content.length; i++) {
      let character = this.content.charAt(i);
      if (character.match(letterRegex)) {
        theLetters.push(character);
      }
    }
    return theLetters.join("");
  }

  this.processor = function() {
    return this.letters().toLowerCase();
  }

  // Returns content processed for palindrome testing,
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for phrase being a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();  // returns result of this comparison
  }

}
