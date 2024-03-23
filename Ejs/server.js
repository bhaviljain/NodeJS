const express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.get('/', function (req, res) {
    var d = new Date()
    var day = d.getDay()

    if (day == 0)

        res.send('day is sunday')

        else if(day == 1)
        res.send('day is monday')

        else if(day == 2)
        res.send('day is tuesday')

        else if(day == 3)
        res.send('day is wednesday')

        else if(day == 4)
        res.send('day is thursday')

        else if(day == 5)
        res.send('day is friday')

        else if(day ==6)
        res.send('day is saturday')
})

app.listen(5000, function () {
    console.log("server started");
})