var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  name: { type: String},
  created_at: { type: Date, default: Date.now }
});

PatientSchema.path('name').unique(true, 'Name needs to be unique');
mongoose.model('Patient', PatientSchema);