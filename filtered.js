const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], "utf8", (err, buffer) => {
    let files = buffer.toString();
    files.filter(() => {
        pathFil(file, process.argv[3]);
    });
});

function pathFil(file, ext) {
    var dot = ".";
    ext = dot + ext;
    return path.extname(file) === ext
}