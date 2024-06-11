const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "username":{type:String,require:true},
        "password":{type:String,require:true},
        "name":{type:String,require:true},
        "dob":{type:String,require:true},
        "bloodgroup":{type:String,require:true},
        "mobileno":{type:String,require:true},
        "address":{type:String,require:true},
        "pincode":{type:String,require:true},
        "district":{type:String,require:true},
        "place":{type:String,require:true},
        "emailid":{type:String,require:true}
    }
)

let usermodel=mongoose.model("user",Schema);
module.exports={usermodel}