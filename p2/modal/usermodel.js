const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String,required:true },
    email: { type: String,required: true,unique: true,   },

    password: { type: String,required:true },
    mobile:{type:String}
  
  },

);
const Login = mongoose.model("practiceschema", userSchema);
module.exports = Login;
