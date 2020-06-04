const express = require('express');
const mongoose  = require('mongoose');
const  DB_Url='mongodb://localhost:'
const app = express();
app.get('/', function(req, res) {
    res.send('<h1>3213123</h1>');
});

app.listen('8091', () => {
    console.log('启动好了');
});
