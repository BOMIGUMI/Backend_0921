const mysql = require('mysql');
const config = require('./mysql.json');
console.log(config)
/* {
    host: 'localhost',
    user: 'kisuser',
    password: 'kispass',
    port: 3306,
    database: 'world'         // use world;
}
 */
/* const fs = require('fs');
fs.writeFile('mysql.jason', JSON.stringify(config), err => {

}); */

const connection = mysql.createConnection(config);
connection.connect();                                       // MySQL DB에 접속 
const sql = `SELECT * FROM city WHERE POPULATION > 9000000;`;
connection.query(sql, (err, rows, fields) => {
    if (err)
        throw err;
    //console.log(rows);                                      // rows : 배열 타입
    for (let row of rows) {
        const str = `${row.ID}\t${row.Name}\t${row.CountruCode}\t${row.District}\t${row.Population}`;
        console.log(str);
    }
    //console.log(fields);
});
connection.end();                                           // MySQL DB에 접속 해제 