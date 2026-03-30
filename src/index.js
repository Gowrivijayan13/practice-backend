import dotenv from "dotenv";
import connectDb from "./config/database.js";
import app from "./app.js"
dotenv.config({
    path: "./.env"
});
const startsever=async()=>{
    try {
        await connectDb();
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error;

        });
        app.listen(process.env.PORT || 30000 ,()=>{
            console.log(`server is running  on the port ${process.env.PORT}`)
        });
        
    } catch (error) {
        
        console.log("failed",error)
    }
   
    
}
startsever();