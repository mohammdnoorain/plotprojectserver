const express =require ("express");
const app=express();
const mongoose=require("mongoose");
// const connection=require(./connection/db.js)
//
//
const user= require("./route/userroute.js");
const clientroute=require("./route/clientroute.js")

const connect=require("./connection/db2.js")
app.get("/test",(_,res)=>{

 console.log("api working");

  res.send("PI working");

});

// mongoose.connect("mongodb+srv://noorainmohammad908:sss798@cluster0.bhos1yh.mongodb.net/Hello", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("MongoDB connected");
// }).catch(err => {
//   console.error("MongoDB connection error:", err);
// });
//
//
//
//
//
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",user);
app.use("/",clientroute)

app.listen(4000,()=>{


  console.log("server brumnnning")
})
connect();
// connection();
