
const mongoose=require("mongoose");


const connect=()=>{

mongoose.connect("mongodb+srv://noorainmohammad908:sss798@cluster0.bhos1yh.mongodb.net/Hello", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});


}


module.exports=connect;



