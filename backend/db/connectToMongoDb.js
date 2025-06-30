import mongoose, { trusted } from "mongoose";

const connectToMongoDb = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("conneted to mongo db");
        
    } catch (error){
        console.log(error);
        
    }
}
export default connectToMongoDb;