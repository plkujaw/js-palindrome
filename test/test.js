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
      let palindrome = new Phrase("Racecar");
      assert(palindrome.palindrome());
    });
  });
});
