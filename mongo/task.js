const {dbConnection} = require('./db')

async function main(){
    try{
        const db = await dbConnection()
        const collection = db.collection("users")

        const findResult = await collection.find().toArray()
        console.log(findResult);
    }
    catch(error){
        console.log(error);
    }
}

main()

//same hain jaise server.js mein kiya hain , bus db aur task aur alag file mein likha hain