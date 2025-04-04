import mongoose from 'mongoose';
import {DB_NAME} from './constants.js'

















/*

( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("ERROR:",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port${process.env.PORT}`)
       })

    } catch(error){
        console.log(error);
        throw err
    }
})()

*/