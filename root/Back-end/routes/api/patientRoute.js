const express = require('express')
const router = express.Router()
const patientController = require('../../controllers/patientControllers')
const verifyJWT = require('../../middleware/verifyJWT')


//router.use(verifyJWT)  a activer apres 
router.route('/')
    .post(patientController.createuser) //sign-up
    .patch(patientController.editpatientpassword)
    module.exports = router