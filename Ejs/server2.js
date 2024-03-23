const express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.set('view engine', "ejs")

var dayText = ''
app.get('/', function (req, res) {
    
    var d = new Date()
    var day = d.getDay()

    if (day == 0 || day ==6)

dayText = "Weekend"
else
dayText ="weekday"
res.render('list',{dayej:dayText})
})

app.listen(5000, function () {
    console.log("server started");
})