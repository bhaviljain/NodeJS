const bodyParser = require('body-parser')
const express =  require('express')
const app = express()
app.use(express.urlencoded({extended:true}))


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000,function(req, res){
console.log("started");
})
app.post("/", function(req,res){
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var result = n1 + n2;
    console.log(result);
})
