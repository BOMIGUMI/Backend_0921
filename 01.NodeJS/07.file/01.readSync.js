// 동기적으로 읽기 - 비권장 사항

const fs = require('fs');

// encoding 정보를 주지 않으면 binary로 읽음
const buffer = fs.readFileSync('tmp/textfil.txt');
console.log(buffer);                // ASCII code 값
console.log(buffer.toString());     // A quick brown fox jumps over the lazy dog.

// 문자로 읽을 경우엔 인코딩 정보가  필요함
const text = fs.readFile('tmp/textfile.txt', 'uts8')
console.log(text);

