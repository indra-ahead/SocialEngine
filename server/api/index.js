const express = require('express');
const db = require('../db');
const router = express.Router();


router.get('/login', async(req, res) => {
    const result = await  db.query('select name from user where id=1');
    console.log(result,"who is 1")
    res.send({type:"indra logined"})
})

router.get('/signup',async (req, res) => {
    console.log(await db.query("select * from user").then(result=>result),"db connection")
    const result = await  db.query('INSERT INTO user (id,name, email, age) VALUES (1,"John Doe", "john@example.com", 30)');
    console.log(result,"result inserted")
    res.send({type:"indra signup"})
})

router.get('/', (req, res) => {
    res.send({type:"index"})
})

module.exports = router;