const express  = require("express")
const router = express.Router();


//import controller

const {deleteInvest} = require("../controllers/deleteInvest");

//define routes

router.delete("/investments/:id", deleteInvest);

module.exports = router;