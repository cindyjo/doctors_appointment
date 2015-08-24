angular.module('app')
.controller('patientsController', function(PatientFactory){
	this.patients = [];	
	var that = this;

	PatientFactory.getPatients(function(data){
		that.patients = data;
	});

	this.addPatient = function() {
		this.err = {};
		
		PatientFactory.addPatient(this.newPatient, function(data){
			if(data.err_unique){
				that.err.uniqueErr = data.err_unique;
			}
			else{
				that.patients = data;
			}
			that.newPatient = {};
		});
	};
})