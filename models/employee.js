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
	}
}, {timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema);

//module.export = Employee;

