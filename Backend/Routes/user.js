import express from "express"
import {  allMembers, newEntry, newUser,deleteEntries } from "../Controllers/MoneyManage.js";

const app = express.Router();

app.get("/user",(req,res) =>{
    res.send("hlo from user")
})

app.post("/signin",newUser)
app.post("/newEntry",newEntry)
app.get("/allMembers",allMembers)
app.delete("/deleteEntries",deleteEntries)
export default app