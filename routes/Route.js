const express = require("express");
const {login, signup, verify,welcome, update,addwallet,addTransaction} = require("../contollers/Controller");

// const getRooms = require("../contollers/Controller.js")
const router = express.Router();

// router.get("/getdata",getRoom);
router.get("/",welcome);

router.post("/login",login);
router.post("/login",login);
router.post("/addtransaction",addTransaction);
router.post("/signup",signup);
router.get("/update",update);


router.get("/verify",verify);
router.get("/addwallet",addwallet);


module.exports = router
