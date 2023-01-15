const patient = require('../model/Patient')
const doctor = require('../model/Doctor')
const agent = require('../model/Agent')
const bcrypt = require('bcrypt')
const expressAsyncHandler = require('express-async-handler')


const createuser = expressAsyncHandler(async (req,res) => {
    const { firstname ,lastname , CIN , password , role ,specialty} = req.body
    //confirm submission
    if(!firstname || !lastname || !CIN || !password){
        return res.status(400).json({message : 'all fields are requried'})
    }
    //check if user already exists
    const dup = await patient.findOne({ CIN }).lean().exec()
    if(dup){
        return res.status(409).json({ message : 'user already exists'})
    }
    //encrypt patient password 
    const encrypted = await bcrypt.hash(password,10)
    if(role == "patient"){
        const newpatient = {
            //a revoir pour le jwt
            firstname, lastname ,CIN ,"Role" : "patient","relatedDocs":[],"password" : encrypted
        }
        //enregistrer patient
        const newpat = await patient.create(newpatient)
        if(newpat){
            return res.status(201).json({message : `new patient ${firstname} created`}) 
        }else{
            return res.status(400).json({message : 'Invalid User Data received'})
    
        }
 
    } 
    if(role == "doctor"){
        const newdoctor = {
            firstname, lastname,CIN,"Role": "doctor", "Specialty": specialty, "absentDays" : 0 ,"patients" : [],"password" : encrypted
        }
        //enregistrer doctor
        const newdoc = await doctor.create(newdoctor)
        if(newdoc){
            return res.status(201).json({message : `new doctor ${firstname} created`})
        }else{
            return res.status(400).json({message : 'Invalid User Data received'})
        }
    }
    if(role == "agent"){
        const newagent = {
            firstname, lastname,CIN,"Role": "agent", "pendingTests" : [] ,"password" : encrypted
        }
        //enregistrer doctor
        const newag = await agent.create(newagent)
        if(newag){
            return res.status(201).json({message : `new agent ${firstname} created`})
        }else{
            return res.status(400).json({message : 'Invalid User Data received'})
        }
    }
    

})


const editpatientpassword = expressAsyncHandler(async (req,res) => {
    const { CIN,password} = req.body
    if(!CIN || !password) {
       return res.status(400).json({message : 'all fields must be filled'})
    }
    const user = await patient.findOne({CIN}).exec()
    
    if(!user){
       return res.status(400).json({message : 'patient not found'})
    }
    const result = await bcrypt.compare(password,user.password)
    if(result){
        return res.json({message :'don t use old passwords'})
    }
    const encrypted = await bcrypt.hash(password,10)
    user.password = encrypted
    const updatedpatient = await user.save()
    res.json({message : `${updatedpatient.password} updated`})

}) 
 
module.exports = {createuser , editpatientpassword }
