# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled promise rejections can lead to crashes or unexpected behavior, especially in production environments.  This example shows how to properly handle them and prevent silent failures. 

## The Problem

The `server.js` file contains a simple Node.js HTTP server.  However, it lacks proper handling for promise rejections.  This can lead to the application quietly failing if an asynchronous operation within the server throws an error.

## The Solution

The `serverSolution.js` file demonstrates the correct way to handle unhandled promise rejections using `process.on('unhandledRejection', ...)` event listener.  This listener ensures that any unhandled rejection is logged and the application doesn't silently crash.

## How to run

1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js` to run the faulty example and observe the lack of any clear error messages. Then run `node serverSolution.js` to see the improved error handling.

## Resources

- [Node.js Documentation on Events](https://nodejs.org/api/events.html)