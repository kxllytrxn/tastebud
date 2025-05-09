# Tastebud
CS160 Final Group Project - Tastebud

Tastebud is a food sharing and recipe discovery platform that allows users to interact with others through home-cooking. <3


# To run locally:
### Install Node.js and NPM:
Make sure you have Node.js and NPM installed. If you don't have them, follow the instructions in the link below to download and install them:

[Instructions to install Node/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
Once you've cloned this repo, run these commands:
```bash
  cd tastebud-app
  npm install
  npm run dev
```
The app should be running on your localhost now!
Make sure to `git fetch` and `git pull main` everytime a new push / PR is merged.

# How the Repo is Structured:
The `tastebud-app/` directory contains the entire application code. Here's a breakdown of how the project is organized:

### `src/`
This holds all of our code (where we'll be working!)
- **`/components`**: Contains reusable UI components like buttons, posts, recipes, etc. Each component has their own separate styling css file to keep our main.css file more compact.
    * **`Button/`**: Standard button component; used for Share, Back, etc
    * **`Modal/`**: A pop-up modal component to show on screen after the user tries to edit a post.
    * **`IconButton/`**: A button component that displays icons; used for liking, commenting, etc
    * **`Post/`**: A component that displays individual posts; used for `Home/Userpage.jsx`
    * **`Recipe/`**: A reusable component to show recipes; used in `Recipe.jsx`
    * **`Comment/`**: A component to hold comments; used on a `Post.jsx `component


- **`/pages`**: Contains the main views or pages of the app, each corresponding to a route. 
    * **`Login.jsx`**: holds login page, but also allow sign ups; will be main page 
    * **`Home.jsx`**: The homepage, where users can create and view posts. 
    * **`UserProfile.jsx`**: User profile page displaying user data and activity.
    * **`Recipes.jsx`**: Page displaying different recipes.

- **`/utils`**: Contains helper functions and utilities that aid in various tasks throughout the app. 
    * **`postUtils.js`**: Contains logic for interactions and saving post-related data locally (like saving drafts or user posts to `localStorage`). 
- **`/services`**: Helper files to interact with external services or APIs. 
    * **`localStorage.js`**: Contains functions for interacting with the browser's localStorage, e.g., saving user data or preferences.



### `/node_modules` 
This is where all the installed dependencies from `npm install` are stored. You don’t need to worry about this folder, as it is managed automatically. If you have any issues, stack overflow is your BFF.

### `/dist` 
This folder is generated by Vite when you run the build command (`npm run build`). It contains the prod-ready version of the app that can be deployed to a server. You don't need to modify this folder directly. (aka don't touch)

### `vite.config.js` 
This file contains the configuration for Vite. It includes settings such as plugins, aliases for directories (like `@` for `src`), and build options. If you edit this and it's not showing up, re-run `npm run dev`.

Currently, to avoid messy file imports, I have included '@' as an alias, so that you can avoid "../.." when deeply nested in the components files. Thus, if you're importing something such as a component or util, use 

### `main.jsx` 
This is the 'entry point' of the React application. It renders the root component of the app (typically wrapped in a `Router` and `React.StrictMode`). 

### `Router.jsx` 
Contains the routing logic, where different pages of the application (like Home, Login, etc.) are mapped to specific routes.

