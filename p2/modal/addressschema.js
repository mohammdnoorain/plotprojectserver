const mongoose = require("mongoose");

const allSchema = new mongoose.Schema(
  {
street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
 streetumber: {
    type: String,
    required: true
  } ,
 plotnumber: {
    type: String,
    required: true
  }, 
   sellingstatus: {
    type: String,
    default: false
  } 
  },
  { timestamps: true }
);
const  address= mongoose.model("house", allSchema);
module.exports = address;
