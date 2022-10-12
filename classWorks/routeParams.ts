var express = require('express');
var app = express();

app.listen(8081, () => {
    console.log('Server listening at 8081...')
})

app.get('/getData/:id', (req, res) => {
    try {
        var id = req.params.id;
        console.log('EMP id is = ' + id);
        res.end((id));
    } catch(err) {
        console.log('Error occured');
    }
});

