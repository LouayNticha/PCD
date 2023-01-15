const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    CIN : {
        type : Number,
        required : true
    },
    Role : {
        type : String,
        default : "Agent"
    }
    ,
    pendingTests : [{
        type : String,
        required : true
    }],
    password : {
        type : String,
        required : true
    },
    refreshToken : String
})

module.exports = mongoose.model('Agent', AgentSchema); 