const rateLimit = require('express-rate-limit')
const {logEvents} = require('./logevents')



const loginLimiter = rateLimit({
    windowMs : 60 * 1000,//1min
    max:6, // 6 login req par min
    message:{
        messgae:'too many login attemps try again after 60 seconds'
    },
    handler:(req,res,next,options) =>{
        logEvents(`too many requests : ${options.message.message} \t ${req.method}\t ${req.url}\t ${req.headers.origin}`,'errlog.log')
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders : true,// rate limit info in ratelimits
    legacyHeaders:false,//disable the 'X-ratelimit-*' headers
})
module.exports = loginLimiter