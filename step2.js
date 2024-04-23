const process = require('process');
const fs = require('fs');
const axios = require('axios');

/** read file at path and print it out. */
function cat(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if(err) {
            console.log(err)
            process.exit(1)
        }
        console.log(data)
    });
}

/** read page at URL and print it out. */
function webCat(url) {
    axios
        .get(url)
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err))
}

let path = process.argv[2]

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
