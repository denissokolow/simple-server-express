const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const qs = require('querystring');

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
 .get('/text', (req, res) => {
        res
            .status(200)
            .set({
                'Content-Type': 'text/html; charset=utf-8'
            })
            .sendFile(path.join(__dirname, 'files', 'primer.txt'))
    })
 .get('/pdf', (req, res) => {
        res
            .status(200)
            .set({
                'Content-Type': 'application/pdf; charset=utf-8'
            })
            .sendFile(path.join(__dirname, 'files', 'static.pdf'))

    })
 .get('/pic', (req, res) => {
        res
            .status(200)
            .set({
                'Content-Type': ' image/png; charset=utf-8'
            })
            .sendFile(path.join(__dirname, 'files', 'logoSDO.png'))
        })              
 .listen(80);