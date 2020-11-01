const trivia = require("./trivia"); // you need to import the MODULE and reference it like an object with the functions as methods of the object being called
// const utils = require("../src/Utils");

test("adds 1 + 2 to equal 3", () => {
  expect(trivia.sum(1, 2)).toBe(3);
});

test("performs subtraction on two variables", () => {
  expect(trivia.subtract(4, 1)).toBe(3);
});
