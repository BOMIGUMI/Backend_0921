const fs = require('fs');

// 순서 보장 안됨
fs.readFile('tmp/textfile.txt', 'utf8', (err, bufA) => {
    console.log(bufA);
});

fs.readFile('tmp/textfile.txt', 'utf8', (err, bufB) => {
    console.log(bufB);
});

fs.readFile('tmp/textfile.txt', 'utf8', (err, bufC) => {
    console.log(bufC);
});

// 순서 보장 방법 => callback 지옥
console.log('순서보장 방법 1')
fs.readFile('tmp/a.txt', 'utf8', (err, bufA) => {
    console.log(bufA);
    fs.readFile('tmp/textfile.txt', 'utf8', (err, bufB) => {
        console.log(bufB);
        fs.readFile('tmp/textfile.txt', 'utf8', (err, bufC) => {
            console.log(bufC);
        });
    });
});


fs.readFile('tmp/a.txt', 'utf8', (err, bufA) => {
    fs.readFile('tmp/textfile.txt', 'utf8', (err, bufB) => {
        fs.readFile('tmp/textfile.txt', 'utf8', (err, bufC) => {
            console.log('순서보장 방법 2')
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});
