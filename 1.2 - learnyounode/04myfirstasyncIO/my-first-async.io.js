const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', function(err, data) {
const lines = data.split('\n');
const numberOfNewlines = lines.length - 1;
console.log(numberOfNewlines);
});