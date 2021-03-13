var express = require('express');
var mongoose = require('mongoose');
var Employee = require('./models/employee')
var authRoutes = require('./routes/auth-routes');

//Express App Initialization
let app = express();

//middleware Urlencoded
app.use(express.urlencoded({ extended: true }));

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
  res.send(`Hello This is my first api, routes are Type=GET : /employeeList, /employee`);
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


//POST API FOR NEW EMPLOYEE
app.post('/employee', async (req,res)=>{
	console.log(req.body);
	let toInsert = {
	employeeId: req.body.employeeId,
	password: req.body.password,
	email: req.body.email,
	firstName: req.body.firstName,
	lastName: req.body.lastName,
	DOB: req.body.DOB,
	CNIC: req.body.CNIC,
	gender: req.body.gender,
	exp: req.body.exp,
	designation: req.body.designation,
	address: req.body.address,
	phoneNo: req.body.phoneNo
	}
	let newEmployee = new Employee(toInsert);
	let response = await newEmployee.save().then((result)=>{
		console.log('New Employee Inserted', result);
		return result;
	}).catch((err)=>{
		console.log('Error: ',err);
		return result
	});
	res.send(response);
})

//route for login, exported from authRoute
app.use('/auth', authRoutes);
