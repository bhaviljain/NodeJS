const {dbConnection} = require('./db')

async function main(){
    try{
        const db = await dbConnection()
        const collection = db.collection("users")
  
       const filter =   {username:"jain"}
   
        const DeleteResult = await collection.deleteMany(filter)
        console.log(DeleteResult);
    }
    catch(error){
        console.log(error);
    }
}

main()