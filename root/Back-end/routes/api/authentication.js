const express = require('express')
const router = express.Router()
const authController = require('../../controllers/authenticationController')
const loginLimiter = require('../../middleware/loginlimiter')

router.route('/')
    .post(loginLimiter,authController.login) //login
    
router.route('/refresh')
    .get(authController.refresh) 
    
router.route('/logout')
    .post(authController.logout)
    
module.exports = router