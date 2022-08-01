# Star Wars SPA

## General Info

This project is a simple React Single Page Application. 

Its purpose is to fetch data from Star Wars API for three categories - characters, starships and vehicles.

Each category is displayed in its own category page. The user can select one item from each category to be his favorite (by clicking on the corresponding card). When an item is clicked on again, it is deselected and removed from favorites. If already there is a selected item in the category and the user clicks on another one, the first one gets deselected. 

The Home page presents the favorite items from all categories. Clicking an item does not remove it from favorites.

There is also a Not Found Page in case the user enters an url that is not part of this application.

The application has responsive view and shows different number of cards according to the screen width. Also the app header changes its design for small mobile devices (below screen width of 560px).

## Technologies and libraries used

 - SASS - for styling;
 - react-query(v4) and axios - for data fetching;
 - React Context API - for state management;
 - react-spinners - for the loading indicator.

## Available Scripts

In the project directory, you can run:

### `npm start`

Important: before you can run the app, you need to install all dependencies with `npm install`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes to the code.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build.\
The build is minified and the filenames include the hashes.

### `npm test`

Launches the test runner in the interactive watch mode.
