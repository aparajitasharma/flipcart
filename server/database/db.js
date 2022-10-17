 import mongoose from 'mongoose'
 
 const Connection = async(username, password)=>{
     const URL =`mongodb://${username}:${password}@ac-q9trrd3-shard-00-00.elqt4od.mongodb.net:27017,ac-q9trrd3-shard-00-01.elqt4od.mongodb.net:27017,ac-q9trrd3-shard-00-02.elqt4od.mongodb.net:27017/FLIPCART_CLONE?ssl=true&replicaSet=atlas-l0l3p9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await  mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true})
    console.log("database connected")
    }catch(error){
        console.log('error while connecting with DataBase', error.message)
    }
}

 export default Connection;