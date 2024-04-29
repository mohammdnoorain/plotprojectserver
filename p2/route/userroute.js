const express = require("express");
const usercontroller = require("../controller/usercontroller");

const user = express.Router(); // Define userRoute as an instance of express.Router()

user.post("/register-client", usercontroller.RegisterClient);

user.post("/register-client-schemaless", usercontroller.RegisterClientschemaless);
user.post("/login-client", usercontroller.LoginClient);

module.exports = user;
