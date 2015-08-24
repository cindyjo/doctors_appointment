angular.module('app')
.factory('PatientFactory', function($http){
	var factory ={};
	var patients = [];

	factory.getPatients = function(callback) {
        $http.get('/patients').success(function(output){
            patients = output;
            callback(patients);
        })
    }

    factory.addPatient = function(info, callback) {
        $http.post('/patients', info).success(function(data){
             if(data.success){
                factory.getPatients(callback);  
            }else {
                callback(data);
            }
    	});
    }
	return factory;

})