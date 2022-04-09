const express = require('express')
require('dotenv').config();
'use strict';
const cors = require('cors');
const { append } = require('express/lib/response');

//initialise express
const app = express()

//PORT
const PORT = process.env.PORT || 5001

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api/v1', require('./routes/payRoute'))

//server
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})
