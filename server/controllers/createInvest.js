
//import Model
const Investment = require("../models/Invest");

//define route handler

exports.createInvest = async(req, res)=>{
    try {
        const investment = new Investment(req.body);
        await investment.save();
        res.status(201).send({ 
            success:true,
         
            message: "Investment saved successfully!" ,
        });
      } catch (error) {
        console.error("Error saving investment:", error);
        res.status(500).send({ 
            success:false,
            data:'Internal server error',
            message:error.message,
         });
      }

}


