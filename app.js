var express = require('express');
var mongoose = require('mongoose');
var Employee = require('./models/employee')

//Express App Initialization
let app = express();
//Mongo DB URI
const dbUri = 'mongodb+srv://monis8khan:sr20dett@testing.bvbcz.mongodb.net/Employee?retryWrites=true&w=majority'
//Mongoose App initialize
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{	//When database is connected with mongoose
console.log('Database is connected')
//Where our app is running
let port = 8080;
app.listen(port, ()=>{
 console.log('The app is running on port ', port);
})
})
.catch(err=>{console.log(err)});

//EndPoints of our Application
app.get('/', (req, res) => {
  res.send('Hello Abeera Monis!')
})


//API FOR NEW EMPLOYEE
app.get('/newEmployee', (req, res)=>{
	var newEmployee = new Employee({
		'employeeId':'001',
		'firstName': 'Monis',
		'lastName': 'Khan',
		'email': 'monis8khan@gmail.com',
		'password': 'helloworld',
		//'DOB': '31/07/1996'
	});
	newEmployee.save()
		.then((result)=>{
			res.send(result)
		}).catch(err=>{console.log(err)})
})

//API TO LIST ALL THE EMPLOYEES
app.get('/employeeList', (req, res)=>{
	Employee.find({}).then((results)=>{
	res.send(results);
	}).catch(err=>{console.log(err)});
})

//API TO LIST SINGLE EMPLOYEE
app.get('/employee', (req, res)=>{
	Employee.findById('6044b2f24f36312c45c00b2b').then((result)=>{
	res.send(result);
	}).catch(err=>{console.log(err)});
})
