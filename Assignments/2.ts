var express = require('express');
var app = express();

app.listen(8081, () => { console.log('server listening at 8081...')});


const data = [
    {
        id: '2292',
        name: 'Abhil',
        dept: 'tech',
        designation: 'sr.soft.engg'
    },
    {
        id: '2293',
        name: 'Abhi',
        dept: 'hr',
        designation: 'hr manager'
    }
]
app.get('/getAllEmployeeData', (req, res) => {

   res.writeHead(404, {'Content-Type': 'application/json'})

    res.end(JSON.stringify(data));
})