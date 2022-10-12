var express = require('express');
var app = express();

app.use(express.json())

app.listen(8081, () => { console.log('server listening at 8081...')});


// method 1 using url params
app.post('/totalSalary/:basic/:hra/:da/:it/:pf', (req, res) => {

   var basic = Number(req.params.basic);
   var hra = Number(req.params.hra);
   var da = Number(req.params.da);
   var it = Number(req.params.it);
   var pf =  Number(req.params.pf);

   const total = basic+ hra + da - it-pf;

   res.end(`total Salary: ${total}`)

})


// method 2 using body
app.post('/totalSalaryBody', (req, res) => {

    var basic = Number(req.body.basic);
    var hra = Number(req.body.hra);
    var da = Number(req.body.da);
    var it = Number(req.body.it);
    var pf =  Number(req.body.pf);
 
    const total = basic+ hra + da - it-pf;
 
    res.end(`total Salary: ${total}`)
 })