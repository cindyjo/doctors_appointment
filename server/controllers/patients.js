var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

module.exports = (function() {
	return {
		show: function(req, res){
			Patient.find({}, function(err, patients){
				if(err){
					res.json(err);
				}else {;
					res.json(patients)
				}
			})
		},

		add: function(req,res){
			var patient = new Patient(req.body);
			patient.save(function(err){
				if(err) {
					if(err.code == 11000){
						err = {err_unique: "Name needs to be unique"};
					}
					res.json(err);
				}
				else {
					res.json({success: true, success_message: "Patient Successfuly added"})	
				}
			})
		}
	}
})();