var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
  name: { type: String},
  date: { type: Date},
  time: { type: String},
  complain: {type :String},
  created_at: { type: Date, default: Date.now }
});

mongoose.model('Appointment', AppointmentSchema);