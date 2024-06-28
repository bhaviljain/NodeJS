const express = require("express")
const app = express()
app.use(express.json())
let books = [
    {id:1,title:"book 1",author:"author 1"},
    {id:2,title:"book 2",author:"author 2"},
]
app.get("/",(req,res)=>{
res.json(books)
})
app.post("/books",(req,res)=>{
    console.log(req.body);
    const newBook = req.body
    newBook.id = books.length + 1;
    books.push(newBook)
    res.json(newBook)
})

app.put("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const updatedBooks = req.body
    const index = books.findIndex((book)=>book.id === id)

    if(index !== -1){
        books[index]= {...books[index],...updatedBooks}
        res.json(books[index])
    }
    else{
        res.status(404).json({error:"book not found"})
    }
})
app.delete("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = books.findIndex((book)=>book.id === id)

    if(index !== -1){
        const deletedBook = books[index]
        books.slice(index,1)
        res.json(deletedBook)
    }
})
app.listen(3000,()=>{
    console.log("server started");
})