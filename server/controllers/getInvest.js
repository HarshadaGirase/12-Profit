//import Model
const Investment = require("../models/Invest");

//define route handler

exports.getInvest = async(req,res)=>{
    try {
        const investments = await Investment.find();
        res.status(200).send(investments);
      } catch (error) {
        console.error("Error retrieving investments:", error);
        res.status(500).send({ error: "Failed to retrieve investments." });
      }
}