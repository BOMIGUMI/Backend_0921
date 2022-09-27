const config = require('./mysql.json');
const template = require('./view/template');

module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            console.log('mysql connection error');
            console.log(err);
        });
        return conn;
    },
    getList: function() {
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE isDeleted=0;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            cancelIdleCallback(rows);
        });
        conn.end();
    }
}