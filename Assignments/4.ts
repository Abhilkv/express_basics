var express = require('express');
var app = express();

app.use(express.json())

app.listen(8081, () => { console.log('server listening at 8081...')});

var data = [
    {
        id: '2292',
        name: 'Abhil',
        dept: 'tech',
        designation: 'sr.soft.engg'
    },
    {
        id: '2293',
        name: 'Sam',
        dept: 'hr',
        designation: 'hr manager'
    },
    {
        id: '2294',
        name: 'Sam',
        dept: 'tech',
        designation: 'manager'
    }
];

app.get('/getAllEmployee', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data));
});

app.get('/getEmployeeById/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const empData = data.filter((emp) => (emp.id === id))

    if (empData.length > 0) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(empData));
    } else {
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end("No records found");
    }
});

app.get('/getEmployeeByName/:name', (req, res) => {
    const name = (req.params.name).toLowerCase();
    console.log(name)
    const empData = data.filter((emp) => ((emp.name).toLowerCase() === name))
    res.writeHead(202, {'Content-Type': 'application/json'})
    if (empData.length > 0) {
        res.writeHead(202, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(empData));
    } else {
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end("No records found");
    }
});

app.post('/insertEmployeeData', (req, res) => {
    var empData = req.body.data;
    console.log(empData)

    const before = data.length;
    data.push(empData);
    const after = data.length;
    
    res.writeHead(200, {'Content-Type':'text/html'})
    if (before < after) {
        res.end("Record inserted successfully");
    } else {
        res.end("Unable to insert the record");
    }
});

app.put('/updateEmployeeData', (req, res) => {
    var empData = req.body.data;
    console.log(empData)

    const oldData = data.filter((item) => item.id === empData.id);
    res.writeHead(200, {'Content-Type':'text/html'})
    if (oldData.length > 0) {
        data = data.map((item) => item.id === empData.id ? empData : item);
        res.end("Record updated successfully");
    } else {
        data.push(empData);
        res.end("Record inserted successfully");
    }
});

app.delete('/deleteRecord/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const empData = data.filter((emp) => (emp.id !== id))
    const deleted = empData.length < data.length;
    data = empData;
    res.writeHead(200, {'Content-Type': 'application/json'})
    if (deleted) {
        res.end('Record deleted successfully');
    } else {
        res.end("Unable to delete record");
    }
});
