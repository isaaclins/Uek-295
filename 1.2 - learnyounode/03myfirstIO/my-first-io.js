const fs = require('fs');
inputText = fs.readFileSync(process.argv[2], 'utf8');
const lines = inputText.split('\n');
var ammount =-1;
lines.forEach(() => {
    ammount++;
});
console.log(ammount);