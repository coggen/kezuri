const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

// Define the directory and the file to touch upon changes
const watchDir = path.join(__dirname, '../src/scss');
const fileToTouch = path.join(__dirname, '../src/index.scss'); // Adjust this path as needed

// Instantiate the file watcher
const watcher = chokidar.watch(`${watchDir}/**/*.scss`, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

// Define the event handlers
watcher
  .on('change', path => {
    console.log(`File ${path} has been changed`);
    touchIndex();
  })
  .on('add', path => {
    console.log(`File ${path} has been added`);
    touchIndex();
  });

// Function to "touch" the index.scss file
function touchIndex() {
  const time = new Date();
  fs.utimes(fileToTouch, time, time, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Touched ${fileToTouch}`);
  });
}