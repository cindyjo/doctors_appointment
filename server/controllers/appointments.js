var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = (function() {
	return {
		show: function(req, res){
			Appointment.find({}, function(err, appointments){
				if(err){
					res.json(err);
				}else {
					res.json(appointments)
				}
			})
		},

		add: function(req,res){
			var appointment = new Appointment(req.body);
			appointment.save(function(err){
				if(err) {
					res.json(err);
				}
				else {
					res.json({success: true, message: "Appointment was successfully added!"})	
				}
			})
		},

		remove: function(req, callback){
			console.log(req);
			Appointment.remove({_id: req}, function(err){
				if(err){
					console.log('something went wrong');
				}
				else {
					callback({success: true})
				}
			})
		}
	}
})();