const mongoose = require('mongoose');

const studentprofileSchema = new mongoose.Schema({
    email: String,
    name: String
});

const Studentprofile = mongoose.model('Userstudent', studentprofileSchema);

exports.Studentprofile = Studentprofile;