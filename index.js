const fs = require('fs');
const express = require('express');
const app = express();

app
 .use('/api', require('./api')(express))
 .get('/', (req, res) => {
    res
    .status(200)
    .set({
        'Content-Type': 'text/html; charset=utf-8'
        })
    .sendFile(__dirname + '/index.html')
    })
 .listen(80);