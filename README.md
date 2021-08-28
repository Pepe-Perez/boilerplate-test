# designory. Front End Developer - Take Home Test Boilerplate - React Version

Convert the attached PDF comp - [**Designory-Project.pdf**](Designory-Project.pdf) - to a webpage using the
following guidelines:

*  Give a detailed explanation of why you coded it the way you did.
*  No CSS frameworks (e.g. Bootstrap, Bulma, Tailwind).
*  Please make responsive as best you can, mobile first.
*  Zip up the the `src/*` folder, or, fork this repository and send us a link to your fork.

## Installation Instructions

> Installing this boilerplate assumes you already have [NodeJS](https://nodejs.org/en/) and
> [npm](https://www.npmjs.com/) installed and configured on your machine.

Install all npm modules via:

    npm install
    
    # Or,
    # yarn install

Then simply run `npm start` or `npm run dev` to start developing!


## Detailed explanation

*Most of the components created in the project was realized with function components, the reason is because we don't need the component methods inside React, just the header component was realized with class component because I created a state to keep the toggle menu and the array with the elements of the menu.

*I created a sass file in order to have some variables, mixins and the media queries used in all the project, in every folder of components and pages a scss were created to import all the scss of our pages and components

*I tried to have all of my components in order, for that reason there's a lot of folder of components, one component for each interaction with the page

*There's a json file with the information of the articles, that's helpful because our component wait all the information and render all the article childs, just add o remove articles in the json file affects the render of the component

*All the pages were Routed with React Router DOM for the paths of the pages

*I used Link for React Router DOM to use redirect to home page in the logo

*The menu items were created with an array to avoid all the repeated code in the list

*There's a global component for the buttons that have all the styles, we just need to put the text

*All pages has its own folder with the component and with the styles

*I think if we have all the components separated in small components it give us a better way to understand the code and what is the main purpose of every component created in react
