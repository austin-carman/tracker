# Job Tracker (Kanban style board with drag and drop)

The motivation behind this project is 3 fold:
1. `Practice`, practice, practice.
2. Seek `advice` to improve my coding skills and meeting best coding practices. I want to learn from you!
4. Learn about possible `job opportunities`. I am actively seeking job opportunities and if you are aware of any I would love to hear from you!

  - Connect with and/or message me via [LinkedIn](https://www.linkedin.com/in/austin-carman/).
  - [Github](https://github.com/austin-carman/tracker): You can submit an issue, pull request, or leave a comment in the discussion.
  
Feel free to checkout other repos pinned on my [Github profile](https://github.com/austin-carman/)!

## Overview

This project helps job seekers organize and track their progress as they go through the job hunting process. Users can add a job posting to this Kanban style board which organizes jobs into the following categories: interested, applied, reached out, interview, offer, and not moving forward. Each job "card" holds details for the job posting such as title, company, job posting url, description, and notes.

Users can drag and drop job "cards" into different application status categories as well as create new jobs "cards" and edit existing job "cards". 

**Note: This project is still a work in progress.**

As currently constructed, this frontend project uses mockAPI endpoints for all API requests simply to demonstrate use of the `fetch()` method to retrieve and send data through API requests (for an example see the AddJob.js file). Dummy data contained in the `data.js` file is used for the job cards displayed on the board at first render.  Eventually, the mockAPI endpoints and dummy data will be replaced with real RESTAPI endpoints and data stored in and retrieved from a database.

View live [site](https://job-tracker-three.vercel.app/)

## TODO

- Filters in the navbar that filter with job cards are listed on the board (ex: time frame)
- Functionality to delete job cards
- Replace mockAPI endpoints with real endpoints. Stop using dummy data and use data returned from API request to display job cards.

## Running the project

From the repo:
  1. Clone this project locally
  2. `cd` into project directory
  2. Run `npm install` in your command line
  3. Run `npm start` in your command line to view in browser

## Dependency list

- [React](https://react.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
