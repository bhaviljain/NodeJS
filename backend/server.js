const express = require('express')
const app = express();
const ConnectDB = require("./db/dbConnect")
const User = require("./db/user")
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.post("/register", async(req,res)=>{
    try{
        const {username, password} = req.body
        console.log(req.body);
        const user = new User({username,password})
        await user.save()
        res.status(201).json({message:"success"})
    }
    catch{
     res.status(500).json({error:"Failed"})
    }
})

//login

app.post("/login",async (req,res)=>{
    try{
        const {username,password} = req.body
        const user = await User.findOne({username})

        if(!user){
            return res.status(401).json({error:"Invalid username"})
        }
        if(user.password !== password){
            return res.status(401).json({error:"Invalid password"}) 
        }
        res.status(201).json({message:"login successfull"})
    }
    catch{

    }
})
ConnectDB()

app.listen(8001,()=>{
    console.log("server started");
})