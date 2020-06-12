
// Reverses a string.

String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

//Defines a Phrase object (class).

function Phrase(content) {
  this.content = content;
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing,
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for phrase being a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();  // returns result of this comparison
  }

  // Makes the phrase LOUDER.
  // this.louder = function louder() {
  //   return this.content.toUpperCase();
  // };
}

//
// // Defines a TranslatedPhrase object
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   // Returns content processed for palindrome testing,
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }


// // Inheritance - TranslatedPhrase object inherits methods from Phrase object (Phrase object is the prototype for TranslatedPhrase object)
// TranslatedPhrase.prototype = new Phrase();

// String.prototype.palindrome = function palindrome() {
//   return new Phrase(this).palindrome();
// }

// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

// Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines). Hint: Use a regular expression. You will need the regex syntax for the start and end of a string.

// String.prototype.blank = function blank() {
//   let whitespace = /^\s*$/g;
//   return !!this.match(whitespace);
// };


// Using whichever method you prefer (direct indexing or slicing), add a last method to the Array object prototype that returns the last element of an array.

Array.prototype.last = function () {
  return this.slice(-1);
};
