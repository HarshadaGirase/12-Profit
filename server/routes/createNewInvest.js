const express  = require("express")
const router = express.Router();


//import controller

const {createInvest } = require("../controllers/createInvest");

//define routes

router.post("/investments", createInvest);

module.exports = router;