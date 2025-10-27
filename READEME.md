# MERN Stack Blog Application

## This is a complete full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a clean, single-page interface for performing all CRUD (Create, Read, Update, Delete) operations on a collection of blog posts.

The backend is a RESTful API built with Node.js and Express, connected to a MongoDB database. The frontend is a dynamic single-file React application styled with Tailwind CSS.

Features Implemented

Create Posts: Add new blog posts with a title, author, and content.

Read All Posts: View a complete list of all posts, sorted with the newest first.

Update Posts: Select any existing post to edit its content in the same form.

Delete Posts: Remove any post from the database.

Real-time UI: The post list updates automatically after any operation.

User Feedback: Clear success and error messages for all actions.

Tech Stack

## Backend:

Node.js: JavaScript runtime environment.

Express.js: Web framework for building the RESTful API.

MongoDB: NoSQL database for storing blog posts.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

CORS: Middleware to enable cross-origin requests from the frontend.

## Frontend:

React.js: JavaScript library for building the user interface.

Tailwind CSS: Utility-first CSS framework for styling.

Babel: Used to transpile JSX in the browser.

Application Screenshots

Here's what the application looks like.

Main View (Creating ):[Creating new posts ](./assets/create.png)

Reading posts:[Read posts ](./assets/posts.png)

Editing a Post:[Editing ](./assets/edit.png)

## Setup and Installation

To run this project, you need to run the backend server and the frontend client separately.

1. Backend (Express & MongoDB)

Clone/Download: Get the backend code onto your local machine.

Install Dependencies: Open a terminal in the backend project's root folder and run:

npm install
npm install cors

Set Up Environment Variables: Create a .env file in the root of the backend folder and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string_here

Run the Server:

node server.js

The server will start, typically on http://localhost:3000.

2. Frontend (React)

Save the File: You just need the blog-frontend.html file.

Serve the File: You cannot open this file directly in the browser. You must serve it using a simple local web server. The easiest way is with npx.

Run the Server: Open a terminal in the folder containing blog-frontend.html and run:

npx serve

Open the App: serve will give you a URL, usually http://localhost:3000 or http://localhost:5000. Open this URL in your browser to use the application.

## API Documentation

The backend provides the following RESTful API endpoints, which the React app consumes.

Base URL: http://localhost:5000/api/v1/posts

Method

Endpoint

Description

Request Body

Success Response

GET

/

Retrieves a list of all blog posts.

None

200 OK (with array of posts)

GET

/:id

Retrieves a single post by its unique ID.

None

200 OK (with single post object)

POST

/

Creates a new blog post.

{ "title": "...", "author": "...", "content": "..." }

201 Created (with new post object)

PATCH

/:id

Updates an existing post by its ID.

{ "title": "...", "content": "..." } (or any fields)

200 OK (with updated post object)

DELETE

/:id

Deletes a post by its ID.

None

204 No Content (with no body)
