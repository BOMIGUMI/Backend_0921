const http = require('http');
const url = require('url');
const mysql = require('mysql');
const config = require('./mysql.json');
const template = require('./view/template');


http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    switch(pathname) {
        case '/':
                                    // 초기 홈화면
            const conn = mysql.createConnection(config);
            conn.connect();
            const sql = `Select * From tigers WHERE isdeleted=0;`;
            conn.query(sql, (err, rows, fields) => {
                let trs = template.trsGen(rows);
                let html = template.home(trs);
                res.end(html);
            });
            conn.end()
            break;
        default:
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000'); 
});
