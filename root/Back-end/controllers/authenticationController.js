const patient = require('../model/Patient')
const doctor = require('../model/Doctor')
const agent = require('../model/Agent')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

//login route POST /authentication
const login = asyncHandler(async (req,res) => {
    const {CIN , password , role} = req.body
    if(!CIN || !password || !role){
        return res.status(400).json({message :'all fields are required'})  
    }
    if(role == 'patient'){
        const foundUser = await patient.findOne({CIN}).exec()
        if(!foundUser || !foundUser.active){
            return res.status(401).json({message : 'Unauthoried'})
        }
        const match = await bcrypt.compare(password,foundUser.password)
        if(!match) return res.status(401).json({message : 'Unauthorized'})
        const accessToken = jwt.sign({
            "UserInfo":{ 
                "CIN" : foundUser.CIN,
                "Role": foundUser.Role
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIN : '10s'}//a changer dans prod
        )
        const refreshToken = jwt.sign(
            {"CIN":foundUser.CIN},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIN : '1d'} //a changer apres
        )
        //creeate secure cookie with tokens
        res.cookie('jwt',refreshToken,{
            httpOnly:true,// only web server has access
            secure:true,//https
            sameSite:'None',//cross-site cookie
            maxAge:1*24*60*60*1000 //=refresh token a changer apres
        })
        //send access token 
        res.json({accessToken})

    }
    if(role == 'doctor'){
        const foundUser = await doctor.findOne({CIN}).exec()
        if(!foundUser || !foundUser.active){
            return res.status(401).json({message : 'Unauthoried'})
        }
        const match = await bcrypt.compare(password,foundUser.password)
        if(!match) return res.status(401).json({message : 'Unauthorized'})
        const accessToken = jwt.sign({
            "UserInfo":{
                "CIN" : foundUser.CIN,
                "Role": foundUser.role
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIN : '10s'}//a changer dans prod
        )
        const refreshToken = jwt.sign(
            {"CIN":foundUser.CIN},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIN : '1d'} //a changer apres
        )
        //creeate secure cookie with tokens
        res.cookie('jwt',refreshToken,{
            httpOnly:true,// only web server has access
            secure:true,//https
            sameSite:'None',//cross-site cookie
            maxAge:1*24*60*60*1000 //=refresh token a changer apres
        })
        //send access token 
        res.json({accessToken})
    }
    if(role == 'agent'){
        const foundUser = await agent.findOne({CIN}).exec()
        if(!foundUser || !foundUser.active){
            return res.status(401).json({message : 'Unauthoried'})
        }
        const match = await bcrypt.compare(password,foundUser.password)
        if(!match) return res.status(401).json({message : 'Unauthorized'})
        const accessToken = jwt.sign({
            "UserInfo":{
                "CIN" : foundUser.CIN,
                "Role": foundUser.Role
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIN : '10s'}//a changer dans prod
        )
        const refreshToken = jwt.sign(
            {"CIN":foundUser.CIN},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIN : '1d'} //a changer apres
        )
        //creeate secure cookie with tokens
        res.cookie('jwt',refreshToken,{
            httpOnly:true,// only web server has access
            secure:true,//https
            sameSite:'None',//cross-site cookie
            maxAge:1*24*60*60*1000 //=refresh token a changer apres
        })
        //send access token 
        res.json({accessToken})

    }


})

//route / authentication/refresh
//public access token expired
const refresh = (req,res) =>{
    const role = req.body
    const cookies = req.cookies
    if(!cookies?.jwt) return res.status(401).json({
        message : 'Unauthorized'
    })
    const refreshToken = cookies.jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err,decoded) => {
            if(err) return res.status(403).json({message : 'forbidden'})
            if(role == 'patient'){
                const foundUser = await patient.findOne({CIN : decoded.CIN}).exec()
                if (!foundUser) return res.status(401).json({
                    message : 'unauthorized'
                })
                const accessToken = jwt.sign(
                    {
                        "UserInfo":{
                            "CIN":foundUser.CIN,
                            "role":foundUser.Role
                        }
                    },process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn : '10s'}
                )
                res.json({accessToken})
            }
            if(role == 'doctor'){
                const foundUser = await doctor.findOne({CIN : decoded.CIN}).exec()
                if (!foundUser) return res.status(401).json({
                    message : 'unauthorized'
                })
                const accessToken = jwt.sign(
                    {
                        "UserInfo":{
                            "CIN":foundUser.CIN,
                            "role":foundUser.role
                        }
                    },process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn : '10s'}
                )
                res.json({accessToken})
            }
            if(role == 'agent'){
                const foundUser = await agent.findOne({CIN : decoded.CIN}).exec()
                if (!foundUser) return res.status(401).json({
                    message : 'unauthorized'
                })
                const accessToken = jwt.sign(
                    {
                        "UserInfo":{
                            "CIN":foundUser.CIN,
                            "role":foundUser.Role
                        }
                    },process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn : '10s'}
                )
                res.json({accessToken})
            }

        })
    ) 







}

//logout route /authentication/logout
//public clear cookie
const logout = (req,res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) // no cookie
    res.clearCookie('jwt',{httpOnly:true,sameSite:'None',secure:true})
    res.json({message : 'cookie cleared'})

}


module.exports = {
    login,
    refresh,
    logout
}
