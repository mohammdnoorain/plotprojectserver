
require("dotenv").config();
const Userschema =require("../modal/usermodel.js");
const User =require("../modal/usermodel2.js")

const jwt = require("jsonwebtoken");




const LoginClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Userschema.findOne({ email: email });
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }

    if (!user.password) {
      return res.send({
        success: false,
        message: "Password is required",
      });
    }

    if (user.password.toString() !== password.toString()) {
      return res.send({
        success: false,
        message: "Password does not match",
      });
    }

    const token = jwt.sign({_id:user._id},process.env.secretkey,{ expiresIn: "4d" });
    console.log("Generated token:", token);

    return res.send({
      success: true,
      user: user,
      token:token,
    
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};


const RegisterClient = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // const hash = await bcrypt.hash(password,10);

    const register = new Userschema({
      name: name,
      email: email,
      password: password,
      
    });

    const result = await register.save();
console.log("jii",result)
    return res
      .status(201)
      .send({ result, message: "Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};


const RegisterClientschemaless = async (req, res) => {
  try {
    // Check if required properties exist in req.body
    if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send({ message: "Name, email, and password are required." });
    }

    // Destructure properties from req.body
    const { name, email, password } = req.body;

    // Create a new document without enforcing a specific schema
    const registerschemaless = new User({
      name: name,
      email: email,
      password: password
    });
console.log("milaaa", email);
  
    // Save the document to the database
    const result2 = await registerschemaless.save();

    console.log("milaaa", result2);

    return res.status(201).send({ result2, message: "Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};


module.exports={

  RegisterClient,
  RegisterClientschemaless,
LoginClient
  
}
