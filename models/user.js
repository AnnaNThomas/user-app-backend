const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "ctitle":{type:String,require:true},
        "cdesc":{type:String,require:true},
        "cdate":{type:String,require:true},
        "duration":{type:String,require:true},
        "venue":{type:String,require:true},
        "trainername":{type:String,require:true}
    }
)

let usermodel=mongoose.model("user",Schema);
module.exports={usermodel}