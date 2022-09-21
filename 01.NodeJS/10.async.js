const async = require('async');
const fs = require('fs');

/* 아래의 코드는 순서 보장이 안됨
fs.readFile('tmp/textfile.txt', 'utf8', (err, bufA) => {
    console.log(bufA);
});

fs.readFile('tmp/textfile.txt', 'utf8', (err, bufB) => {
    console.log(bufB);
});

fs.readFile('tmp/textfile.txt', 'utf8', (err, bufC) => {
    console.log(bufC);
});
 */
async.parallel({
    bufA: function(callback) {
        fs.readFile('07.file/tmp/a.txt', 'utf8', callback);
    },
    bufB: function(callback) {
        fs.readFile('07.file/tmp/b.txt', 'utf8', callback);
    },
    bufC: function(callback) {
        fs.readFile('07.file/tmp/c.txt', 'utf8', callback);
    }
}, (err, results) => {
    console.log(results.bufA);
    console.log(results.bufB);
    console.log(results.bufC);
});