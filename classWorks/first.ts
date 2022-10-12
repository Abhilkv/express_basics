var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("First code on express");
});

var server = app.listen(8081, () => {
    console.log('Server litening at 8081');
})

//  npm i -D @types/node 