const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect  = () => {
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("DB Connection Successfuly");
       }).catch((error)=>{
          console.log("Issue in DB Connected");
          console.log(error.message);
          process.exit(1);
       })
}

module.exports = dbConnect; 