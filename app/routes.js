const express=require('express');
const router=express.Router();
const session = require('express-session');
const path = require('path');
const hbs = require('hbs');
const mysql=require('mysql');
const {check, validationResult}=require('express-validator');
const app=express();

app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

router.get('/',function(req,res){
    res.send('Home page');
})

router.get('/login',function(req,res){
res.render('../view/login.hbs');
})

router.post('/login',[
check('email').isEmail().normalizeEmail(),
check('password').isLength({min:6})
],
function(req,res){
    console.log(req.body)
    const errors=validationResult(req);
    if (errors) {
        res.render('../view/login.hbs',{
            'errors': errors.array(),
            'success': 'loggedin successfully',            
        });
    } else {
        res.render('../view/login.hbs');
    }    
})

module.exports=router;