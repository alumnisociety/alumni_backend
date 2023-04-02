const express = require('express');
const morgan = require('morgan');
const cors= require('cors')
const alumniRoute= require('./routes/alumniRoute')
const authRoute= require('./routes/authRoute')

const app = express();


app.use(express.json())
app.use(cors())

// Home 
app.get('/', (req,res)=>{ 
    res.send('server up')
})

app.use('/api/alumnis', alumniRoute)
app.use('/auth', authRoute)


// 404 error page
app.all('*', (req, res, next) => {
    next(`Can't find ${req.originalUrl} on this server!`, 404);
});
  

module.exports = app;
