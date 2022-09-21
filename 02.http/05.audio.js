const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('view/example_MP3.mp3', 'utf8', (err, audio) => {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(audio);
    })
});

server.listen(3000);