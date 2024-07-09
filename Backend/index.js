import express from "express"
import userRoute from "./Routes/user.js"
import { connectDb } from "./Utils/feature.js";
import morgan from "morgan"
import cors from "cors"
const app = express();
app.use(morgan("dev"))

connectDb();

app.use(express.json())
app.use(cors())

const PORT =  3000 ;

app.use("/user",userRoute)
app.get("/",(req,res) =>{x
    res.send("Money App Server")
})


app.listen(PORT,() =>{
    console.log(`server is running on port http://localhost:${PORT}`)
})