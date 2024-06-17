# Uek-295 Workspace

This workspace contains various JavaScript and Node.js projects, each located in its own directory.

## Directory Structure

- `1.1/`: Contains a simple JavaScript file, [`hello.js`](1.1/hello.js), that prints "Hello, World" to the console. This is a basic example of a JavaScript program.

- `1.2 - learnyounode/`: Contains several directories, each with a different Node.js project. These projects are part of the "learnyounode" tutorial series.
  - `01helloworld/`: Contains a Node.js script, [`hello-world.js`](1.2%20-%20learnyounode/01helloworld/hello-world.js), that prints "HELLO WORLD" to the console. This is the first step in the learnyounode tutorial series.
  - `02babysteps/`: Contains a script that takes command line arguments and adds them. This is an introduction to process.argv in Node.js.
  - `03myfirstIO/`: Contains a script that reads a file and prints the number of newlines it contains to the console, synchronously.
  - `04myfirstasyncIO/`: Contains a script that demonstrates asynchronous I/O in Node.js. It reads a file and prints the number of newlines it contains to the console, asynchronously.
  - `05filteredls/`: Contains a script, [`filtered-ls.js`](1.2%20-%20learnyounode/05filteredls/filtered-ls.js), that filters directory files based on their extension. This is an introduction to the fs module in Node.js.
  - `06makeitmodular/`: Contains a script, [`make-it-modular.js`](1.2%20-%20learnyounode/06makeitmodular/make-it-modular.js), that uses a module to filter directory files. This is an introduction to creating and using modules in Node.js.
  - `07httpclient/`: Contains a script that performs a HTTP GET request to a URL provided as the first command-line argument.
  - `08httpcollect/`: Contains a script that collects and prints the complete HTTP GET response from a provided URL.
  - `09jugglingasync/`: Contains a script that performs HTTP GET requests to three URLs and collects the complete responses, printing them in the order they were provided.

- `2.1/`: Contains a JavaScript file, [`verdoppeln.js`](2.1/verdoppeln.js), that demonstrates the use of functions and variables in JavaScript.

- `2.2/`: Contains a JavaScript file, [`promises.js`](2.2/promises.js), and a text file, [`beispiel.txt`](2.2/beispiel.txt). The JavaScript file demonstrates the use of promises for asynchronous operations.

- `2.3/`: Contains a JavaScript file, [`asyncmath.js`](2.3/asyncmath.js), that demonstrates the use of async/await for handling promises.

- `3.1/`: Contains a Node.js project with a `package.json` and a script, [`helloworld.js`](3.1/helloworld.js). This is a basic Node.js application that prints "Hello, World" to the console.

- `3.2/`: Contains a Node.js server project with a `package.json` and a server script, [`server.mjs`](3.2/server.mjs). This is a basic HTTP server that responds with "Hello, World" for every request.

- `3.3/`: Contains a Node.js project that serves HTML and XML files. This is an introduction to serving static files with Node.js.

- `4.1/`: Contains an Insomnia export file, [`Insomnia_2024-06-11.json`](4.1/Insomnia_2024-06-11.json). This file can be imported into Insomnia to test the APIs developed in this workspace.

- `4.2/`: Contains a Node.js project with a `package.json` and a script, [`index.js`](4.2/index.js). This is a basic Express.js application that serves a "Hello, World" page.

- `5.1/`: Contains a Node.js project that uses the Express framework and the `fs` module. This application serves a list of books stored in a JSON file.

- `5.2/`: Contains a Node.js project with a `books.json` file. This application serves a list of books stored in the JSON file and allows adding new books.

## Installation

Each project has its own dependencies listed in its `package.json` file. To install these dependencies, navigate to the project's directory and run `npm install`.

## Running the Projects

Each project can be run using Node.js. For example, to run the `hello.js` script in the `1.1/` directory, navigate to that directory and run `node hello.js`. For projects that start a server, you can visit the server in your web browser at `http://localhost:3000` (or whatever port is specified in the script) after running the script.
