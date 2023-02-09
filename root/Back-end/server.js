require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const {logger , logEvents} = require('./middleware/logevents')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const corsOptions = require('./config/CORSoptions');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnect');
const PORT = 3000;
//connect to DB
connectDB();

//middlewares 
app.use(logger) 
app.use(cors(corsOptions))
app.use(express.json()) 
app.use(cookieParser())
app.use('./',express.static(path.join(__dirname,'public')));

app.use('/',require('./routes/api/root.js'))
//route for the crud operations
app.use('/authentication',require('./routes/api/authentication.js'))   
app.use('/createUsers',require('./routes/api/createUsersRoute'))

//app.use('/')
app.all('*',(req,res)=>{ 
    res.status(404);
    if (req.accepts('html')){
        res.sendFile(__dirname,'views','404.html')
    }
    else if(req.accepts('json')){
        res.json({message : '404 not found'})
    }else{
        res.type('txt').send('404 not found')
    }
    
    
})

app.use(errorHandler)


mongoose.connection.once('open', ()=>{
    console.log('connected')
    app.listen(PORT,()=>{
        console.log('server working ')
    })
})

mongoose.connection.on('error', err =>{
    console.log(err)
    logEvents(`${err.no} : ${err.code}\t ${err.syscall}\t ${err.hostname}`,'mongoErrLog.log')
  
})