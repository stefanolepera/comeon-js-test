## COMEON javascript test

The first choice I had to make was related to the tech stack to use. I ended up going for Reactjs, ES6 and Redux as state management.
There was a bit of boilerplate to deal with (especially Redux) so I used the `create-react-app` library trying to minimize that.
Once the project was set up, my first approach was to split the provided html file in a mix of statefull / stateless components.
After that was done I started to implement some logic to make the website work.
That's the moment when I set up Redux and added Axios for the API calls.
I finished one section at the time (login, games lobby, loaded game) and then I moved into polishing / refactoring the code and added some tests for the actions and reducers.
To test the actions I've user the `redux-mock-store` and `moxios` libraries, to help test the API calls.
Due to the time constrain I focused more on complete the task and on the quality of the code and tests, the only adds that I made was a dropdown menu in the game screen where the user can load a different game without having to go back to the lobby.
I managed to give the user a feedback for both the incorrect login (using the error coming from the API) and an empty result using the search bar for games (a No Match Found message gets displayed).
I found and fixed a bug where if the user clicks on the logout button while some filters are active (either using the search bar or the categories), on the next successfull log in those filters were still active giving a poor user experience (I've just added a filter reset action that gets dispatched on logout).


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
