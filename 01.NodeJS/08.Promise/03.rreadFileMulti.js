const fs = require('fs');

fs.readFile('tmp/a.txt', 'utf8', (err, bufA) => {
    console.log(bufA);
    fs.readFile('tmp/textfile.txt', 'utf8', (err, bufB) => {
        console.log(bufB);
        fs.readFile('tmp/textfile.txt', 'utf8', (err, bufC) => {
            console.log(bufC);
        });
    });
});