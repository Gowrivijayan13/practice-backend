import mongoose from "mongoose"
const connectDb=async()=>{
    try {
        const connectioninsance=await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`/n mongodb connection successful 
             ${connectioninsance.connection.host}`);
        
    } catch (error) {
        console.log("mongodb connection is failed");
        process.exit(1)
    }
}
export default connectDb;