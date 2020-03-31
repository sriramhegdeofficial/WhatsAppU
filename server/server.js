const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


//require all routes
const authRoutes = require('./routes/auth.js');


// initialize express app
const app = express();

//db

mongoose.connect(`${process.env.DATABASE_DEV}`, {useNewUrlParser: true, useUnifiedTopology: true},() =>{
    console.log("db connected");
});

//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors 
if(process.env.NODE_ENV) {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}


//routes



app.use(authRoutes);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app listening on port ${port}!`));


