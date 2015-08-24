angular.module('app')
.filter('isFuture', function(){
	return function(items) {
		return items.filter(function(item){
			return moment(item.date).isAfter(new Date());
		})
	}
})

angular.module('app')
.controller('appointmentsController', function(AppointmentFactory){
	this.appointments = [];	
	this.logged_patient;
	var that = this;
	this.today = new Date();
	
	this.getAppointments= function(){
		AppointmentFactory.getAppointments(function(data){
			that.appointments = data;
		});
	}
	this.getAppointments();

	AppointmentFactory.getLoggedPatient(function(data){
		that.logged_patient = data;
	});

	this.login = function() {
		that.logged_patient = this.patient
		AppointmentFactory.login(that.logged_patient);
	}

	this.validateDate = function(){
		var today = new Date();
		var input = new Date(this.newAppoint.date)
		if(input <= today){
			return false;
		}
		else {
			console.log('true')
			return true
		}
	}

	this.validateTime = function(){
		var input = new Date(this.newAppoint.time)
		var hour = input.getHours();
		if(hour < 8 ){
			return false;
		}
		else if (hour >17){
			return false;
		}
		else {
			return true;
		}	
	}
	this.validateComplain = function() {
		var input = this.newAppoint.complain;
		if(input.length < 10)
		{
			return false;
		}
		else {
			return true;
		}
	}
	this.validateNum = function(){
		console.log('appointments', this.appointments);
		console.log('input', this.newAppoint);
		var uniqs = {};
		for(var i = 0; i<this.appointments.length; i++){
			uniqs[this.appointments[i].date] = (uniqs[this.appointments[i].date] || 0) + 1;
		}
		var max = {val: this.appointments[0].date, count:1};
		for(var u in uniqs){
			if(max.count < uniqs[u]){
				max = {val: u, count: uniqs[u]};	
			}
		}
		var input_date = new Date(this.newAppoint.date);
		input_date=""+input_date;
		var max_date = new Date(max.val);
		max_date = ""+max_date;

		if(input_date === max_date){
			if(max.count == 3){
				return false;
			}
		}
		else {
			return true;
		}
	}
	this.addAppointment = function() {
		this.err = {};
		this.newAppoint.name = that.logged_patient;
		this.validateNum();
		console.log('0');

		if (this.validateDate() && this.validateTime() && this.validateComplain() && this.validateNum()) {
		console.log('1');
			AppointmentFactory.addAppointment(this.newAppoint, function(data){
				console.log('4');
				if(data.errors){
					for(var name in data.errors){
						that.err[name] = data.errors[name].message;
					}
				}	
				else{
					console.log(data);
					that.appointments = data;
				}
				that.getAppointments();
				that.newAppoint = {};
			});
		}
		else {
			that.err.validation = "validation failed";
		}
	};
	this.removeAppointment = function(appointment) {
		console.log('controller', appointment);
		AppointmentFactory.removeAppointment(appointment._id, function(data){
			that.appointments = data;
		});
	};
})