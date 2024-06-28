const server = require("express")
const app = server()
const path = require("path")
const { phone } = require("./data")

app.get('/',(req, res)=>{
    res.send("Hello")
})
app.get('/index',(req, res)=>{
    res.send('<h2>Home <a href="/api/phone">Phone</a></h2>')
})

app.get("/jsonexample",(req,res)=>{
    res.json(phone)
})
// app.get("/api/phone",(req,res)=>{
//     const newItems = phone.map((prod)=>{
//         const {name} = prod;
//         return {name}
//     })
//     res.json(newItems) //to get only particular data from the jsonfile
// })
// app.get("/api/phone/:phoneID",(req,res)=>{
//    const {phoneID} = req.params;
//    const IDS = phone.find((prod)=> prod.id === Number(phoneID))
//    res.json(IDS)
// })
// app.get("/api/v1/query",(req,res)=>{
//  let sorted =[...phone]

//  const {search,limit} = req.query
//  if(search){
//     sorted = sorted.filter((prod)=>{
//         return prod.name.toLowerCase().startsWith(search)
//     })
//  }
//  res.json(sorted)

// })
app.get("/api/v1/query",(req,res)=>{
 let sorted =[...phone]

 const {search,limit} = req.query
 if(limit){
    sorted = sorted.filter((prod)=>{
      return prod.name.id(limit)
    })
 }
 res.json(sorted)

})


app.listen(3001,()=>{
    console.log("server is running");
})