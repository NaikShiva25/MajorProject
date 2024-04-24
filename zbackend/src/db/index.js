import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'




const DBConnect = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`\n Monogo_DB connected !!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODBCONNECTION ERROR :",error);
        process.exit(1);
    }
}
 export default DBConnect;