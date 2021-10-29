# Multiplayer Card Game Template (Tika Llyn Kitty Version)

Uses an Express Server to manage Socket.IO connections and Phaser to manage game mechanics and UI.

Built starting with this Phaser 3 project template(https://github.com/photonstorm/phaser3-project-template) with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/) that includes hot-reloading for development and production-ready builds.

Based off of this wonderful tutorial: (https://www.freecodecamp.org/news/how-to-build-a-multiplayer-card-game-with-phaser-3-express-and-socket-io/)

## To Get Started

First SERVER side:
Open a terminal in your root & `npm install`
then 'npm start' to get your server running through http://localhost:3000
(you don't need to open this side though. This server is just to manage your socket connections)

Then, CLIENT side:
cd into `client` and run `npm install`
after all the dependencies are installed, 'npm start' to get your client running at http://localhost:8080 (This will automatically open your browser)

## The Basics included in the Template:

# SERVER-SIDE

server.js manages the server side of socket.io (recieves the messages each client emits then emits messages back)

# CLIENT

* `client/src/index.js`
our game config file with the basics to set up Phaser
* `client/src/assets`
contains all of our public image files
* `client/src/helpers`
contains all of our helper contructor Classes
_ CARD creates new cards
_ DEALER handles deck and card management
_ ZONE creates our drop zones
* `client/src/scenes`
contains our 'scenes' or gameviews. Right now, there is only one game.js
