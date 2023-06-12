const express=require('express');
const router=express.Router();

router.get('/',function(req,res){
    res.send('Home page');
})

router.get('/login',function(req,res){
res.sendFile(`${__dirname}/view/login.html`);
})

module.exports=router;