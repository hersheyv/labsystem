const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    comp_lab: Int32,
    date: String, 
    time: String,
    email: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

exports.Reservation = Reservation;