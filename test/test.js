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

    it("Returns true for a mixed-case palindrome")

    it("Returns true for a palindrome with punctuation")
  });
});
