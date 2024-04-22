# System zarządzania cyfrową biblioteką

## Contents
- [Overview](#overview)
- [Getting started](#getting-started)
- [Authentication](#authentication)

## Overview
The application is a simplified version of a digital library. It is built using the ExpressJS NodeJS library. The database is not used for simplicity's sake. Instead, all the data the user interacts with is stored in the process memory and is purged every time the application is restarted. It allows the user to:

- Add, edit, delete, and browse authors
- Add, edit, delete, and browse books

## Getting started
1. Install all dependencies by running `npm i` in the application root directory.
2. Run the application using `npm start` (requires `nodemon` to be installed on your machine) or `node app.js` in the application root directory.

## Authentication
The user must log in before using the application. Please use the following credentials to log in:
- email: `user@example.com`
- password: `pass123`
