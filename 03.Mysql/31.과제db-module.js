const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            if (err) {
                console.log('mysql connection error');
                console.log(err);
            }
        });
        return conn;
    },
    getGirlGroupList: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid, name, date_format(debut, '%Y-%m-%d') AS debutDate, song.title 
                        FROM girl_group
                        JOIN song ON girl_group.hit_song_id=song.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },
    getSongList: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, gg.name FROM song
                        JOIN girl_group AS gg ON gg.hit_song_id=song.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },
    getGirlGroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid, name, date_format(debut, '%Y-%m-%d') AS debutDate, song.title 
                        FROM girl_group
                        JOIN song ON girl_group.hit_song_id=song.sid
                        WHERE gid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);    
        });
        conn.end();
    },
    getSong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, gg.name FROM song
                        JOIN girl_group AS gg ON gg.hit_song_id=song.sid
                        WHERE sid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },
    insertGirlGroup: function(params, callback) {
        const conn = this.getConnection();
        /* const sql = `INSERT INTO girl_group
                        VALUES (default, ?, ?, ?);`; */
        const sql = `INSERT INTO girl_group (name, debut, hit_song_id)
                        VALUES (?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    updateGirlGroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE girl_group SET name=?, debut=?, hit_song_id=?
                            WHERE gid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deleteGirlGroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `DELETE FROM girl_group WHERE gid=?`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    insertSong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO song
                            VALUES (default, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    updateSong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE song SET title=?, lyrics=?
                            WHERE sid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deleteSong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `DELETE FROM song WHERE sid=?`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }
}