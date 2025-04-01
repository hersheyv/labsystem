const mongoose = require("mongoose")
const User = require("./userstudent")
// require('dotenv').config();

const url = "mongodb+srv://hersheyvlaflor:YibqKg2JDoteL1Gz@labdbcluster.ua2mw.mongodb.net/"

mongoose.connect(url)
    .then(() => { console.log('Connected to Mongodb')})
    .catch((err) => { console.log(`Connection failed: ${err}`)})
