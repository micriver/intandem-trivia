# Project Notes

Here are some obstacles I've run into while creating this project and the ways I've overcome them. I'm also including features I'd like to add in the future, reasons behind design decisions, as well as links to various resources and tools for others to discover and begin using :smile:

### Breakdown

The JSON data has question objects inside an array.

Each object has the question itself, the incorrect answers in an array and the correct answer as properties.

#### To-do:

1. Figure out how to display the questions on the screen

### Challenges

I'm not a professional designer. But I definitely found myself wanting a certain simple look to the application. Google and W3schools came in clutch a lot of the time when it came to styling.

I was calling the shuffle function multiple times without realizing it. Spent a lot of time trying to find this bug and read documentation about the wrong things. Sometimes the best debugger is a break.

State being changed in the child component was changed everytime I changed props inside the child from the parent. If you want state to stay the same and have logic doing work in your child, you must have that state inside your parent.

### Design Thoughts

I'd like to keep the design as minimal and clean as possible. Each question will be displayed on a card. I want to add transitional animations whenever an action occurs, although that will depend on how much time I have left to finish the challenge.

## Links to Resources/Tools used

1. [Load JSON data React app](https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file/33650470#33650470)
2. [Parse JSON data from a local file into a React app.](https://stackoverflow.com/questions/37649695/how-can-i-parse-through-local-json-file-in-react-js)
3. [Adding fonts in React.Js](https://stackoverflow.com/questions/40769551/how-to-use-google-fonts-in-react-js)
4. [Using CSS Modules in React.Js](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
5. [Pass a parameter through an onClick function](https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react)
6. [Copy Array into a new Array](https://stackoverflow.com/questions/7486085/copy-array-by-value)
7. [Export functions for use across components](https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react/32889002)
8. [Randomly arrange or shuffle an array](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php)
9. [Iterating over JSON data in React](https://kirstyburgoine.wordpress.com/2018/01/21/iterating-through-json-data-in-react/)
10. [Object values, keys, entries explained](https://javascript.info/keys-values-entries)
11. [Export module syntax for Jest](https://stackoverflow.com/questions/44302573/module-exports-multiple-functions-in-jest-testing)
