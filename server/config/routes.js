module.exports = function(app) {
// Appointments	
  	var appointments = require('../controllers/appointments.js');
    // Show
	app.get('/appointments', function(req, res) { 
		appointments.show(req,res);
	});
	// Add
	app.post('/appointments', function(req, res) { 
		appointments.add(req, res);
	});
	//delete
	// app.delete('/appointments/:id', function(req, res){
	// 	appointments.remove(req.params.id, function(err, data){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		res.json(data);
	// 	})
	// })
// Patients
  	var patients = require('../controllers/patients.js');
    // Show
	app.get('/patients', function(req, res) { 
		patients.show(req,res);
	});
	// Add
	app.post('/patients', function(req, res) { 
		patients.add(req, res);
	});
	
// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/')
		response.render('/')
	})
	app.post('/*', function(request, response){
		response.redirect('/')
	})

}