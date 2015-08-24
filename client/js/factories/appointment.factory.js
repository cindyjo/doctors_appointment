angular.module('app')
.factory('AppointmentFactory', function($http){
	var factory ={};
	var appointments = [];
    var logged_patient;

    factory.login = function(patient) {
        logged_patient = patient;
    }   
    factory.getLoggedPatient = function(callback){
        callback(logged_patient);
    }

    factory.getAppointments = function(callback) {
        $http.get('/appointments').success(function(output){
            appointments = output;
            callback(appointments);
        })
    }

    factory.addAppointment = function(info, callback) {
        console.log('2');
        $http.post('/appointments', info).success(function(data){
            console.log('3');
             if(data.success){
                callback(data.message);
            }else {
                callback(data);
            }
    	})
    }
    factory.removeAppointment = function(id, callback){
        $http.delete('/appointments/'+id).success(function(){
            factory.getAppointments(callback);
        });
        callback(appointments);
    }
	return factory;

})