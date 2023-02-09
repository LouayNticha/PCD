const express = require('express')
const router = express.Router()
const createUsersController = require('../../controllers/createUsersControllers')
const verifyJWT = require('../../middleware/verifyJWT')


router.use(verifyJWT)
router.route('/')
    .post(createUsersController.createuser) //sign-up
    .patch(createUsersController.editpatientpassword)
    module.exports = router 