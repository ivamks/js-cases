const express = require('express');
const app = express();
const user = require('user');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.route('/user')
    .get(function (req, res) {
        res.send('GET user!');
    })
    .post('/user', function (req, res) {
        res.send('POST user!');
    })

    .put(function (req, res) {
        res.send('PUT user!');
    })

    .delete(function (req, res) {
        res.send('DELETE user!');
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});