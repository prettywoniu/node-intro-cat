const argv = process.argv;
const fs = require('fs');

function cat(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if(err) {
            console.log(err)
        }
        console.log(data)
    });
}

cat(argv[2])