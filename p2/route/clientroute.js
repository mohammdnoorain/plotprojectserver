const express = require("express");
const clientcontroller = require("../controller/clientcontroller.js");

const clientroute = express.Router(); // Define userRoute as an instance of express.Router()


clientroute.post("/registeraddress",clientcontroller.Registeraddress);
clientroute.post("/updateaddress/:id",clientcontroller.Updateaddress)

module.exports =clientroute;
