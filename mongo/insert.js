const {dbConnection} = require('./db')

async function main(){
    try{
        const db = await dbConnection()
        const collection = db.collection("users")
  
        const data = [
            {name:"user1", age:20},
            {name:"user2",age:22},
        ]

        const insertResult = await collection.insertMany(data)
        console.log(insertResult);
    }
    catch(error){
        console.log(error);
    }
}

main()