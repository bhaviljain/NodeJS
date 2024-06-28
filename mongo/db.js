const {MongoClient} = require("mongodb")
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'mydatabase'

const dbConnection = async () =>{
    try{
        await client.connect()
        console.log("connected to server");
        const db = client.db(dbName)
        return db
    }
   catch(error){
   console.log("failed");
   throw error
   }
}
module.exports = {dbConnection}