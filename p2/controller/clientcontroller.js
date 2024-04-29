require("dotenv").config();
const address=require("../modal/addressschema.js")

const jwt = require("jsonwebtoken");




const Registeraddress = async (req, res) => {
  try {
    const {street,city,state,country,postalCode,streetumber,plotnumber} = req.body;

    // const hash = await bcrypt.hash(password,10);

    const register = new address({
      
      street:street,
      city:city,
      state:state,
      country:country,
      postalCode:postalCode,
      streetumber:streetumber,
      plotnumber:plotnumber,
      
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



const Updateaddress = async (req, res) => {
  try {
    let {street,city,state,country,postalCode,streetumber,plotnumber } = req.body;
    const { id } = req.params;
    console.log("id millll",id)

    let data = await address.findByIdAndUpdate(
      id,
      {
        $set: {
              street:street,
      city:city,
      state:state,
      country:country,
      postalCode:postalCode,
      streetumber:streetumber,
      plotnumber:plotnumber,
        },
      },
      { new: true }
    );

 
    res.send({ message: "Updated successfully", data: data });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error updating client");
  }
};



module.exports={

  Registeraddress,
Updateaddress

}
