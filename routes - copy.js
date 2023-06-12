const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const secret_key="123456789";

const auth=function(req,res,next){
    var header = req.headers;
    if('authorization' in header){
        var token=header['authorization'].split('Bearer ')[1];
        jwt.verify(token,secret_key,function(error,decode){
            console.log(decode)
            if(error){
                res.send('Invalid Token');
            }          

            next();
        })
    }else{
        res.send('Invalid Token');
    }
    
}

    router.get('/',function(req,res){
        res.send('Home Page')
    })
    router.get('/json',function(req,res){
        var data=[
            {
                'test':'data'
            },
            {
                'test2':'data2'
            }
        ]
        res.json(data)
    })
    router.get('/page2',function(req,res){
        res.sendFile(`${__dirname}/views/index.html`);
    });
    router.get('/pageid/:id',function(req,res){
        res.send('request recevied');
        console.log(req.params)
    })
    router.get('/register',function(req,res){
        res.sendFile(`${__dirname}/views/register.html`)
    })
    router.post('/register',function(req,res){
        res.send('send data')
        console.log(req.body)
    })
    //router.use(auth);
    router.post('/login',function(req,res){
        //const req.body={username,password};
        const username=req.body.username;
        const password=req.body.password;
        if(username == "admin" && password == "123"){
            jwt.sign({id:1,username},secret_key,{expiresIn:'1m'},async function(error,token){
                const refresh_token= await jwt.sign({id:1},secret_key);
                res.send({'token':token,'referesh_token':refresh_token});
            });
        }else{
            res.send("username and password are incorrect");
        }
    })

    router.get('/private',auth,function(req,res){
        res.send('Private page');
    })

    router.post('/refresh-token',function(req,res){

    })

    module.exports=router;
