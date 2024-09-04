import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.Listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.chatch((err) => {
    console.log("MONGO db Connection failed !!!", err);
    
})




