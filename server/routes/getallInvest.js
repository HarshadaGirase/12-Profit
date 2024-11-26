const express  = require("express")
const router = express.Router();


//import controller

const {getInvest} = require("../controllers/getInvest");

//define routes

router.get("/investments", getInvest);

module.exports = router;