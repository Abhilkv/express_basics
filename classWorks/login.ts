var express = require('express');
var app = express();

app.get('/login', (req, res) => {
    var id = req.query.id;
    var pwd = req.query.pwd;

    console.log('data got: id=' + id + ' . pwd: ' + pwd  );
    var result = 'Not a valid User';

    if (id === 'Abhil' && pwd === '123456') {
        result = 'Valid User';
    }

    res.end(result);
})

app.listen(8081, () => { console.log('server listening at 8081...')});