const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DocSchema = new Schema({
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
    role : {
        type : String,
        default : 'doctor'
    },
    Specialty : {
        type : String,
        required : true
    },
    absentDays : {
        type : Number,
        required : true
    },
    patients : [{
        type : String,
        required : true
    }],
    password : {
        type : String,
        required : true
    },
    refreshToken : String
})

module.exports = mongoose.model('Doctor', DocSchema); 