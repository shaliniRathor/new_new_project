const express= require ("express");
const app= express();
const port= 5000
const myrouter=require("./routers")
const mongoose = require ("mongoose")
const DATABASEurl= "mongodb+srv://rathorshalini299:shalini123456@cluster0.mzvuk0b.mongodb.net/?retryWrites=true&w=majority"


app.use(myrouter)


app.listen(port,()=>{
    console.log(`server listen on${port}`);
    mongoose.connect(DATABASEurl)
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch((err)=>console.log(err,"not connected" ))
})
