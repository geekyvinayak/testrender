const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    monthCycle:{
        type:Number
    },
    transactions:{
        type:Array,
    },
    monthlyBudget:{
        type:Number
    },
    Wallets:{
        type:Array
    }
})

module.exports = mongoose.model("User",userSchema);