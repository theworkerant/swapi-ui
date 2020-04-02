# Frontend Homework Project

## Questions

### Question #1
> You have a web application that is slow. It is rendered on the server side (it can be in any framework you are familiar with that does server-side rendering). This application makes numerous calls to the database for each request. To speed this up, the page is cached in memory, but now this is taking a lot of resources and it is still slow to respond. What might you do if you wanted to improve things? Do not feel constrained by the current implementation, and feel free to describe what tech you might use and how it would help.

---

  This situation being so abstract I wouldn't want to speculate on which technology or tools to use here as it would be a research project first to investigate the primary issue and then picking a solution based on what is expedient given the current tech stack and project goals. Instead here are some ideas to look into:

  1. optimize database calls, assuming they aren't already
  2. trim down data to only what is necessary, assuming the data is bloated, so as to save memory or over-the-wire costs.
  3. investigate how the app can be split up on a request basis, so as to only getting certain data on demand instead of "all upfront", this could be done on the backend by splitting in terms of pages/routes, or the frontend by splitting the UI up to load data on user events
  4. caching pieces of data (as opposed to the whole page) could also be effective
  5. gzip?

### Question #2
```js
// You have a specification that should give you the following data (plus more information):
// {
//     "name": "STRING",
//     "classification": "STRING",
//     "designation": "STRING",
//     "averageHeight": "STRING",
//     "skinColors": "STRING",
//     "hairColors": "STRING, COMMA, SET",
//     "eyeColors": "STRING, COMMA, SET",
//     "averageLifespan": "STRING",
//     "homeworld": "LINK",
//     "language": "STRING",
//     "people": [ARRAY],
//     "films": [ARRAY],
//     "created": "DATE",
//     "edited": "DATE",
//     "url": "LINK",
// }
// However, your application is not showing the any Hair Color when you query the list of species at:
//
// https://swapi.co/api/species/
// What might the problem be? What did you use to identify the problem?
```

---

My first step is a guess, which is that maybe not all species have hair. Given the Star Wars theme of the data this seems likely. Next step is to check documentation to confirm this suspicion. Checking the docs show a caveat around hair attribute: `"none" if this species does not typically have hair`, however this doesn't quite fit with first guess which would have the attribute `null` or missing entirely, so moving on. Checking the list at `https://swapi.co/api/species/` I can see a few datapoints to compare.

I see the datapoint for species named: "Hutt" has a value for attribute `hair_colors` of "n/a" which isn't what the API docs specified (should be "none"). This could cause a bug if my application has an expected list of colors but no entry exists for value "n/a".

Otherwise, I see that the `hairColors` is not `hair_colors` and this could also cause a problem, although it would be simple enough to transform keys and the problem statement is somewhat ambiguous here.

Finally, the species and person endpoint are not quite the same (hair_color vs hair_colors) and improper copying of attribute keys could have caused a bug.

### Question #3
> Testing front-end frameworks can be challenging. What have you done in your past to help test and verify your changes are accurately meeting the requirements?

Frontend testing is quite tough. Testing depth on the frontend usually requires more careful cost-benefit analysis when compared to the backend because they are so much more likely to be brittle or hard to setup and maintain given the browser/visual component. I've found that low-level unit testing is most feasible and reliable, that is, testing code inside functional components. Comprehensive or intricate integration testing often ends up being difficult to maintain in my experience. There is probably no work around for device/browser testing although that's become better over the years and tools have been developed. Personally I've used a tactic where the frontend stays as light as possible, leaning on the backend to provide robust data that needs little manipulation and fits the UI well— this can limit frontend complexity and put the testing burden on the backend where it is often easier to do. Seeing as modern apps can have several frontends, this pattern has served well in practice.

---

## SWAPI Ships & Famous Pilots Project
>
Write a program which pulls from the Star Wars API and provides an option of possible starships, which, when chosen, shows ALL pilots who have used the starship.
Which programming language, framework or tooling you use is up to you. The exercise constraints:
We should be able to run the program in our web browser. Please include instructions for running it that an engineer who might not be familiar with your tech stack could follow.
Create a repository on github, push your code to it, and send us the link.
Email us when you are done.
Only submit your own work. You can use libraries and frameworks, but make sure you wrote the script itself.
The project is deliberately open-ended because we want to see how you build it--there is not any preferred way to get to the end result.

### Directions:
Please run `npm start` and go to [http://localhost:3000](http://localhost:3000) to view the project.

---

### Create React App Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
