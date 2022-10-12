var express = require('express');
var app = express();

app.use(express.json())

app.post('/login', (req, res) => {
    var id = req.body.id;
    var pwd = req.body.pwd;

    console.log('data got: id=' + id + ' . pwd= ' + pwd  );
    var result = 'Ivalid user';

    if (id === 'Abhil' && pwd === '123456') {
        result = 'Valid User';
    }
    // forcefully updating response header
    // res.writeHead(404, {'Content-Type':'text/html'})
    res.end(result);
})

app.listen(8081, () => {
    console.log('Server listening at 8081...')
})