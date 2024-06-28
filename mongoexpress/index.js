const express = require("express")

const app = express()

const {dbConnection} = require('./db')

app.get('/', async (req,res)=>{
    try{
        const db = await dbConnection()
        const collection = db.collection('users')
        const users = await collection.find().toArray()
        res.json(users)

    }
 catch(error){
  console.log(error);
 }
})
app.use(express.json())
app.post("/users", async(req,res)=>{
 
        const db = await dbConnection()
        const collection = db.collection('users')
        console.log(req.body);
        // let results = collection.insertOne({username:"rocky", result:20})
        let results =collection.insertOne(req.body)
          res.json("ok")   
})

app.put('/users/:username',async(req,res)=>{
    const db = await dbConnection()
    const collection = db.collection('users')
    let update = collection.updateOne({username:req.params.username},{$set:req.body})
    res.json("put done")
})

app.delete('/users/:username',async(req,res)=>{
    const db = await dbConnection()
    const collection = db.collection('users')
    const name = req.params.username
    collection.deleteOne({username:name})
    res.send('deleted')
})

app.listen(3000, function(req,res){
    console.log("server connected");
})