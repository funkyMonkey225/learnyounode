const fs = require('fs');

var content = fs.readFileSync(process.argv[2]);
content = content.toString();
content = content.split('\n');
let number = content.length - 1;
console.log(number);

// Official Solution
// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
    
