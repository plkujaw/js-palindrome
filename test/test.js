let assert = require("assert");
let Phrase = require("../index.js");


describe("Phrase", function() {
  // Phrase#palindrome
  describe("#palindrome", function() {
    it("Returns false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("Apple");
      assert(!nonPalindrome.palindrome());
    });

    it("Returns true for a palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("Returns true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("Returns true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

  });

  describe("#letters", function() {
    it("Converts given string to letters only", function() {
      let punctuatedString = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedString.letters(), "MadamImAdam");
    });

    it("Returns the empty string when no match", function(){
      let noLetters = new Phrase("123.456");
      assert.strictEqual(noLetters.letters(), "");
    });

  });

});
