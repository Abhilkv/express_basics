var express = require('express');
var app = express();

app.listen(8081, () => {
    console.log('Server listening at 8081...')
})

app.get('/getmethod', (req, res) => {
    res.end('Get Method captured')
})

app.post('/postmethod', (req, res) => {
    res.end('Post Method captured')
})

app.put('/putmethod', (req, res) => {
    res.end('put Method captured')
})

app.delete('/deletemethod', (req, res) => {
    res.end('Delete Method captured')
})

app.patch('/patchmethod', (req, res) => {
    res.end('Patch Method captured')
})