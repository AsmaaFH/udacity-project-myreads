# MyReads Project

This is the project for the final assessment project for Udacity's React Fundamentals course.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## The Project has

```bash
├── README.md - This file.
├── package.json # npm package manager file, has all dependecies
├── public
│   ├── favicon.ico. # App icon
│   └── index.html 
└── src
    ├── components
    │   ├── Book.js # Component for Book Unit.
    │   ├── BooksShelf.js # Component for Every Shelf Renders it's Books Inside.
    │   ├── SearchedBooks.js # Component for Displaying Books Searched By a User.
    │	├── SearchInput.js # Component for User Search Input
    │	├── ShelfSelect.js # Component for Select a Shelf Wrapped Inside Every Book.
    │	└── Error.js # Component for Handling Error that Would Caused as a Result for Non match Search Value or 
    │       Unable to Connect Server.
    │
    ├── pages
    │   ├── home.js # Component for Main Page, Includes the Three Shelves and Their Books.
    │   └── search.js # Component for Books Search, It Calls API to retrieve searched books.
    │	    
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify the development process,Udacity's provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

