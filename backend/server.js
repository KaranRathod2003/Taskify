const dotenv = require('dotenv');
const { default: connectDB } = require('./config/db');
dotenv.config();


connectDB();

