const trivia = [
  {
    question: "What was Tandem's previous name?",
    incorrect: ["Tandem", "Burger Shack", "Extraordinary Humans"],
    correct: "Devmynd",
  },
  {
    question:
      "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    incorrect: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
    correct: "Et tu, Brute?",
  },
  {
    question: "A group of tigers are referred to as:",
    incorrect: ["Chowder", "Pride", "Destruction"],
    correct: "Ambush",
  },
];

// feed all of trivia JSON data at top level since this is array of objects
function randomNoRepeats(array) {
  var copy = array.slice(0); // create a copy of the incoming array from the first index
  return function () {
    if (copy.length < 1) {
      // length check
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length); // get a random item in the array within it's length
    var item = copy[index]; // assign item in the array to variable
    copy.splice(index, 1); // remove the item found at the index in the copied array
    console.log(item.question);
    console.log(item.correct);
    return item; // return that item
  };
}

// chooser has to be relabeled as questionObj since it returns the question with answers as an object
var chooser = randomNoRepeats(trivia);
// var chooser = randomNoRepeats(["Foo", "Bar", "Gah"]);
// console.log(Object.values(chooser())[0]); // => "Bar"
// console.log(Object.values(chooser())[0]); // => "Bar"
// console.log(Object.values(chooser())[0]); // => "Bar"
// console.log(Object.values(chooser())[0]); // => "Bar"
// console.log(chooser()); // => "Foo"
// console.log(chooser()); // => "Gah"
// console.log(chooser()); // => "Foo"-- only repeats once all items are exhausted.

chooser();
