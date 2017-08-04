const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], "utf8", (err, buffer) => {
    if (err) {
        console.log(err.message);
    }
    let files = buffer.toString();
    files = files.split(',');
   
    let newFiles = files.filter((file) => {
        var ext = "." + process.argv[3];
        return path.extname(file) === ext;
    })
    newFiles.forEach((element) => {
        console.log(element);
    });
});

// Example solution
// var fs = require('fs')
//     var path = require('path')
    
//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]
    
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })