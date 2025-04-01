const mongoose = require('mongoose');

const usertechnicianSchema = new mongoose.Schema({
    email: String,
    passwords: String
});

const Usertechnician = mongoose.model('Userstudent', usertechnicianSchema);

exports.Usertechnician = Usertechnician;