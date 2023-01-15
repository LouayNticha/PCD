const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    firstname : {
        type : String ,
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
        default : 'patient'
    },
    relatedDocs : {
       type : [String],
       default : []
    } ,
    password : {
        type : String,
        required : true
    },
    refreshToken : String
})
 
module.exports = mongoose.model('Patient', PatientSchema); 