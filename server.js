const express= require("express");
const app=express();
const path= require("path");


app.get("/page 1",(req,res)=>{
    res.sendFile(path.join(__dirname,"page 1.html"))
})
app.get("/page 2",(req,res)=>{
    res.sendFile(path.join(__dirname,"page 2.html"))
})
app.get("/page 3",(req,res)=>{
    res.sendFile(path.join(__dirname,"page 3.html"))
})

app.listen(4021   ,   ()=>{
    console.log("server is running");
}) 