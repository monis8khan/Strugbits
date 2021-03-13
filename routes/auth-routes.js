const router = require('express').Router();

//Auth Login

router.get('/login', (req,res)=>{
	res.send('Login')
});

router.get('/logout', (req,res)=>{
	res.send('logging out')
})


module.exports = router;
