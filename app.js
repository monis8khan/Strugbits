var express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello Abeera Monis!')
})

app.listen(3030, ()=>{
 console.log('The app is running on port 3030');
})

