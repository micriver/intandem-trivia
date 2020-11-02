<!--

[ ] Include any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

[ ] include the requirements and acceptance criteria found in this document in your README

 -->

# Tandem Apprenticeship Code Challenge

Hey there 👋🏼

My name's Mike! I actually had a really great time coding this project and I learned a ton! I hope you enjoy playing the game as much as I enjoyed bringing it to life!

## Usage

In the project directory, to open the application, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Project Goals

From the PDF:

"Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.

Use creative license in terms of how you want us to see this game. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.

We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome."

# Code Challenge Acceptance Criteria:

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.
- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## Challenges

I have been learning React on and off since the beginning of summer 2020. I've been stuck in a bit of tutorial purgatory but while coding this original project, I was exposed to more of React's inner workings and rules. I learned more about the parent-child relationship, re-rendering the DOM, utilizing React hooks and state interaction amongst components. I ran into issues related to the aforementioned topics and buried myself in documentation and stack overflow to fix them. In the end, I'm much more confident in my React abilities after this project.

I made an attempt to work with Jest but due to timing, I felt I could miss the deadline or deliver an incomplete project. By the time I wanted to incorporate testing, I'd already completed a lot of the logic and felt like I was digging to find something in the app to test for the sake of testing. I choose to move forward, however, after seeing the benefits, I will definitely incorporate TDD into future projects.

I'm not a professional designer but I definitely wanted a simple, clean look for the application. Google and W3schools came in clutch a lot of the time when it came to styling.

I was using a function to shuffle the JSON array of objects in order to randomize the questions for the player. At some point, I realized I was calling the function multiple times without realizing it. I spent a lot of time trying to find this bug. At some point I found the function in two different places. Sometimes the best debugger is a **break**.

## Future Additions

While working on this project, I thought it'd be cool to add multiplayer and timer features to the application. It'd be fun to play against others or even on teams! A 30 second timer for each question would make the game more dynamic and add a bit of tension! 😆

I was also thinking of finding an API of trivia questions, increasing the number of questions available to the players.

When it comes to the design, I'd like to add some animation to the application. Maybe some fade-ins and fade-outs.

I'd also like to clean up the code a lot more, revise some of the overall structure and re-design the placement of components on the page.

I'm sure with more time, I could have done a bit more but overall, I'm proud of the effort and the work I put into the application overall.

Thank you!

### 👉🏼 &nbsp; For other work, head on over to my [website](https://micriver.github.io/)!

## Links to Resources/Tools used

1. [Load JSON data React app](https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file/33650470#33650470)
2. [Parse JSON data from a local file into a React app.](https://stackoverflow.com/questions/37649695/how-can-i-parse-through-local-json-file-in-react-js)
3. [Adding fonts in React.Js](https://stackoverflow.com/questions/40769551/how-to-use-google-fonts-in-react-js)
4. [Using CSS Modules in React.Js](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
5. [Pass a parameter through an onClick function](https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react)
6. [Copy Array into a new Array](https://stackoverflow.com/questions/7486085/copy-array-by-value)
7. [Multiple onClick Events in React](https://upmostly.com/tutorials/multiple-onclick-events-in-react-with-examples#call-multiple-functions)
8. [Export functions for use across components](https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react/32889002)
9. [Randomly arrange or shuffle an array](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php)
10. [Iterating over JSON data in React](https://kirstyburgoine.wordpress.com/2018/01/21/iterating-through-json-data-in-react/)
11. [Object values, keys, entries explained](https://javascript.info/keys-values-entries)
12. [Export module syntax for Jest](https://stackoverflow.com/questions/44302573/module-exports-multiple-functions-in-jest-testing)
13. [If else statements for JSX](https://shripadk.github.io/react/tips/if-else-in-JSX.html#:~:text=if%2Delse%20statements%20don't,function%20calls%20and%20object%20construction.)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
