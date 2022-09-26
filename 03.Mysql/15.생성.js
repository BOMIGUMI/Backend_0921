const mysql = require('mysql');
const config = require('./mysql.json');

const conn = mysql.createConnection(config);
conn.connect();
let sql = `
    INSERT INTO tigers (palyer, backNo, POSITION)
    VALUES ('한승택', 4, '포수');`;
conn.query(sql, (err, fields) => {
    if (err)
        throw err;

    sql = `SELECT * FROM tigers;`
    conn.query(sql, (err, rows, fields) => {
        if (err)
            throw err;
        for (let row of rows) {
            console.log(`${row.id}\t${row.palyer}\t${row.backNo}\t${row.position}\t${row.isdeleted}`)
        }
    });
    conn.end();
});
