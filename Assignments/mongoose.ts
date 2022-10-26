var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.json())

app.listen(8081, () => { console.log('server listening at 8081...')});

var mongoDB = 'mongodb://127.0.0.1/AbhilDB';
mongoose.connect(mongoDB).then((data) => {
    console.log("Connection established");
})
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection errro') );
mongoose.pluralize(null);


// CREATING SCHEMA
var Schema = mongoose.Schema;

var EmployeSchema = new Schema({
    "name": String,
    "branch": String,
    "designation": String,
    "id": String
});

var EmployeTable = mongoose.model('employe', EmployeSchema);


// GET
app.get('/getEmploye', (req, res) => {
    EmployeTable.find().then((data) => {
        console.log(data);

        res.status(200).send(data);
    }).catch((err) => {
        console.log("Couldn't fetch data");
        res.status(404).send(err);
    })
})

app.get('/getEmployeById/:id', (req, res) => {
    const id = req.params.id;
    EmployeTable.find({"id": {$eq: id}}).then((data) => {
        console.log(data);

        res.status(200).send(data);
    }).catch((err) => {
        console.log("Couldn't fetch data");
        res.status(404).send(err);
    })
})


// POST
app.post('/addEmploye', (req, res) => {
    var name =  req.body.name;
    var branch = req.body.branch;
    var designation = req.body.designation;
    var id = req.body.id

    var empObj = new EmployeTable({"name": name, "branch": branch, "designation": designation, "id": id});


    empObj.save((err, result) => {
        if (err) {
            console.log("Failed to save data");
            res.status(400).send("Failed to save data")
        } else {
            console.log("saved employe data");
            res.status(201).send("saved employe data")
        }
    })
})

//PUT

app.put('/updateEmploye', (req, res) => {
    var name =  req.body.name;
    var branch = req.body.branch;
    var designation = req.body.designation;
    var id = req.body.id;

    console.log(id)

    EmployeTable.updateMany({"id": {$eq: id}}, {"name": name, "branch": branch, "designation": designation, "id": id}, (err, data) => {
        if (err) {
            console.log("Failed to update the data " + err);
            res.status(400).send("Failed to update data ")
        } else {
            console.log("Data updated successfully");
            res.status(201).send("Data updated successfully");
        }
    })
})

//Delete
app.delete('/removeEmploye/:id', (req, res) => {
    const id = req.params.id;
    EmployeTable.deleteMany({"id": {$eq: id}}).then(() => {
        console.log("Entry deleted for ID :" + id);
        res.status(200).send("Entry deleted for ID")
    }).catch((err) => {
        console.log("Unabale to delete employe: "+ id);
        res.status(400).send("Unabale to delete employe")
    })
})