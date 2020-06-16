module.exports = Phrase;

// Adds 'reverse' to all strings.

String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

//Defines a Phrase object (class).

function Phrase(content) {
  this.content = content;

  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
    // we use || [] because match returns null if there is no match and throws an error
  }


  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase(this.content);
  }

  // Returns true for phrase being a palindrome, false otherwise.
  this.palindrome = function palindrome() {
  if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}
