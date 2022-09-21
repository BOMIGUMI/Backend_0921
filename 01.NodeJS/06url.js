const url = require('url');

const urlSample = 'https://www.hanbit.co.kr.\/academy/books/book_view.html?p_code=B425025'
const parsedObject = url.parse(urlSample);

console.log(parsedObject);
console.clear();
console.log(parsedObject.href);
console.log(parsedObject.query);