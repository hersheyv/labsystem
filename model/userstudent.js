const mongoose = require('mongoose');

const userstudentSchema = new mongoose.Schema({
    email: String,
    passwords: String
});

const Userstudent = mongoose.model('Userstudent', userstudentSchema);

exports.Userstudent = Userstudent;