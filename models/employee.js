const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Employee Scheema
const employeeSchema = new schema({
	employeeId : {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String, 
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
	},
	DOB: {
		type: Date,
		required: false
	},
	CNIC: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	exp: {
		type: String,
		required: true
	},
	designation: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phoneNo: {
		type: String,
		required: true
	}
}, {timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema);

//module.export = Employee;

