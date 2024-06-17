const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directory, (err, unfilteredFiles) => {
  if (err) {
    return console.error(err);
  }

  const filteredFiles = unfilteredFiles.filter(file => path.extname(file) === '.' + fileExtension);
  filteredFiles.forEach(file => console.log(file));
});
