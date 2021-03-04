const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Employee Scheema
const employeeSchema = new shcema({
	employeeId : {
		type: string,
		required: true
	},
	firstName: {
		type: string,
		required: true
	},
	lastName: {
		type:string, 
		required: true
	},
	email: {
		type:string,
		required: true
	},
	password: {
		type: string,
		required: true,
	},
	DOB: {
		type: date,
		required: false
	}
}, {timestamps: true});

const employee = mongoose.model('employeeData', employeeSchema);

module.export = employee;

