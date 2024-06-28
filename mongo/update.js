const {dbConnection} = require('./db')

async function main(){
    try{
        const db = await dbConnection()
        const collection = db.collection("users")
  
     

        const UpdateResult = await collection.updateMany({username:"jain"},{$set:{age:22}})
        console.log(UpdateResult);
    }
    catch(error){
        console.log(error);
    }
}

main()