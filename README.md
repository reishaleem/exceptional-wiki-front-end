This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# The Exceptional Outliner

## Contents

-   [About](#about)
-   [Tools and Technologies used](#tools-and-technologies-used)
-   [Implemented features](#implemented-features)
-   [Planned features](#planned-features)

## About

This is the front-end of a web application that uses React, Spring Boot, and MongoDB. This application currently allows users to create accounts, universes, wiki articles, and a todo list for each universe. The articles can be about anything, from characters to locations to events. The back end can be found [here](https://github.com/reishaleem/exceptional-wiki-back-end).

There are aspects of the app that are placeholders for future features. They are there just to show what it would look like if it were complete.

The design of the front-end mirrors the designs of other applications like [Plot Factory](https://plotfactory.com) and [World Anvil](https://www.worldanvil.com/). This app was mainly just a learning experience, and I wanted to duplicate certain aspects of these designs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tools and Technologies used

In this front-end, the key technologies and dependencies used are:

-   React
-   Bootstrap
-   axios
-   react-router
-   react-hook-form. This is mainly how some basic validation is done.
-   react-js-pagination.
-   The Todo component, which can be found [here](https://github.com/reishaleem/todo-list).
-   Atomic Design. I don't adhere to the principles _perfectly_, but I try to make an effort.

## Implemented features

So far, the features implemented in this front-end are:

-   Screens for CRUD operations on Users
-   Screens for CRUD operations on Universes, Wikis, and the Todo list. This includes the rich text editor for the wiki body, and the todo list component mentioned above.
-   Screens for public information, routing, as well as redirects to avoid logged out users from accessing pages that require being logged in

## Planned features

Some features that will be implemented are:

-   Screens for CRUD operations on several other models, such as maps and manuscripts.
-   A screen for the Generator
