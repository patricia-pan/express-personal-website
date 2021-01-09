Doing the exercise from below link:
https://gawdiseattle.gitbook.io/wdi/05-node-express/00readme-1/03views

1. mkdir express-personal-website.
2. touch index.js
2. npm init -y // This adds node to our folder. We can now use `node index.js` to run our file in our JS file in our terminal.
3. npm install express // This creates a package-lock.json file. Want to download it locally and not globally.
4. In the index.js file, add:
    const express = require('express') // Import express, where the name of the constant is up to you.
    const app = express() // Create an instance of an express app, where the name of the constant is up to you.
5. If you don't have nodemon (automatically runs `node index.js` whenever you save your file), download it globally: `npm install nodemon -g`