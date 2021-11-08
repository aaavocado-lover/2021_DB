
import express from "express";
import sql from "../database/sql";

const router = express.Router();
router.get('/', async function(req, res, next){

    const users = await sql.getUsers()
    console.log(users);
    res.render('users', {
        title: '사용자 목록',
        users
    });
});

module.exports = router;


/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
