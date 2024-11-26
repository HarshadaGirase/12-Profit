const express = require("express");
const app = express();
const cors = require("cors");
const path = require( "path");

require('dotenv').config();

const PORT = process.env.PORT || 8000




// const __dirname = path.resolve(); // Define the current directory path

//middleware to parse json body
app.use(express.json());

// Define corsOptions for CORS configuration
const corsOptions = {
    origin: "https://one2-profit.onrender.com" , // Replace with your frontend URL or array of allowed domains
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
    // allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed <headers></headers>

    credentials:true
};

// Use CORS middleware with the custom options
app.use(cors(corsOptions));



//import routes for createInvest
const createNewInvestRoutes = require("./routes/createNewInvest");
const getAllInvest = require("./routes/getallInvest");
const deleteSingleInvest = require("./routes/deleteSingleIvest");

//mount the Invest API routes
app.use("/api/v1/createInvest", createNewInvestRoutes);
app.use("/api/v1/getInvest", getAllInvest)
app.use("/api/v1/deleteInvest" ,  deleteSingleInvest )


//
app.use(express.static(path.resolve(__dirname, "..", "client/dist")));  
app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));  // Corrected path
});
//start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

//db connection

const dbConnect = require("./config/database");
dbConnect();

