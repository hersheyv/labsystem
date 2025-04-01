const mongoose = require('mongoose');

const slotsSchema = new mongoose.Schema({
    comp_lab: Int32,
    date: String, 
    time: String
});

const Slots = mongoose.model('Reservation', slotsSchema);

exports.Slots = Slots;