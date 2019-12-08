const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Data = require('./data');


const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
    'mongodb://diego:hhs07029@ds253408.mlab.com:53408/heroku_cll39b6j';

// connects our back end code with the database
mongoose.connect(dbRoute, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//ptional) only made for logging and
// cookieParser, parses the request body to be a readable json format
app.use(cookieParser());
app.use(express.urlencoded(true));
app.use(express.json());
app.use(logger('dev'));
// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));