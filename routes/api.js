const express = require('express');
const mysql = require('mysql');

const router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airapos'
});

var date = new Date();
var dateTime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " "
    + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

router.get('/', function (req, res, next) {
    res.send("Hello");
});

router.get('/library', function (req, res, next) {
    connection.query(`SELECT libraryItems.*, categories.name AS categoryName 
        FROM libraryItems 
        INNER JOIN categories 
        ON libraryItems.categoryId=categories.id`,

        function (err, rows, fields) {
            if (err)
                res.send(err);
            
            res.json({ data: rows });
        });
});

router.get('/library/:id', function (req, res, next) {
    connection.query(`SELECT libraryItems.*, categories.name AS categoryName 
        FROM libraryItems
        INNER JOIN categories 
        ON libraryItems.categoryId= categories.id 
        WHERE libraryItems.id=` + req.params.id + `
        LIMIT 1`,
    
        function(err, rows, fields) {
            if (err)
                res.send(err);

            res.json(rows);
        })
});

router.post('/library', function (req, res, next) {
    connection.query(`INSERT INTO libraryItems (categoryId, name, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
        [req.body.categoryId, req.body.name, req.body.description, dateTime, dateTime],
        function (err, rows, fields) {
            if (err)
                res.send(err);
            
            res.json(rows);
        })
});

router.put('/library/:id', function (req, res, next) {
    connection.query(`UPDATE libraryItems 
        SET categoryId=?
            name=?,
            description=?,
            updated_at=?
        WHERE id=?`,
        [req.body.categoryId, req.body.name, req.body.description, dateTime, req.params.id],
        function (err, rows, next) {
            if (err)
                res.send(err);
            
            res.json(rows);
        });
});

router.delete('/library/:id', function (req, res, next) {
    connection.query(`DELETE FROM libraryItems WHERE id=?`,
        [req.params.id],
        function (err, rows, next) {
            if (err)
                res.send(err);

            res.json(rows)
        })
});

router.get('/categories', function (req, res, next) {
    connection.query("SELECT * FROM categories ORDER BY name ASC",
        function (err, rows, fields) {
            if (err)
                res.send(err);

            res.json({ data: rows });
        });
});

router.get('/categories/:id', function (req, res, next) {
    connection.query("SELECT * FROM categories WHERE id = ?",
        [req.params.id],
        function (err, rows, fields) {
            if (err)
                res.send(err)

            res.json(rows[0]);
        })
});

router.post('/categories', function (req, res, next) {
    connection.query("INSERT INTO categories (name, created_at, updated_at) VALUES (?, ?, ?)",
        [req.body.name, dateTime, dateTime],
        function (err, rows, fields) {
            if (err)
                res.send(err)

            res.json(rows);
        })
});

router.put('/categories/:id', function (req, res, next) {
    connection.query("UPDATE categories SET name=?, updated_at=? WHERE id=?",
        [req.body.name, dateTime, req.params.id],
        function (err, rows, fields) {
            if (err)
                res.send(err);

            res.json(rows)
        })
});

router.delete('/categories/:id', function (req, res, next) {
    connection.query("DELETE FROM categories WHERE id=?",
        [req.params.id],
        function (err, rows, fields) {
            if (err)
                res.send(err);

            res.json(rows);
        })
})

module.exports = router;