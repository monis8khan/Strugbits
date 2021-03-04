var express = require('express');
var mongoose = require('mongoose');


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



