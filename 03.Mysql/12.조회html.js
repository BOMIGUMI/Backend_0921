const fs = require('fs');
const mysql = require('mysql');
const config = require('./mysql.json');
console.log(config)
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country Code</th>
            <th>District</th>
            <th>Population</th>
        </tr>
`;

const connection = mysql.createConnection(config);
connection.connect();                                       // MySQL DB에 접속 
const sql = `SELECT * FROM city WHERE POPULATION > 9000000;`;
connection.query(sql, (err, rows, fields) => {
    if (err)
        throw err;
    //console.log(rows);                                      // rows : 배열 타입
    for (let row of rows) {
        let line = '<tr>';
        line += `<td>${row.ID}</td><td>${row.Name}</td><td>${row.CountruCode}</td><td>${row.District}</td><td>${row.Population}</td>`;
        line +=`</tr>`
        html += line;        
    }
    //console.log(fields);
    html += `
    </table>
</body>
</html>
    `;
    fs.writeFile('12.table.html', html, err => {
        
    });
});
connection.end();                                           // MySQL DB에 접속 해제 