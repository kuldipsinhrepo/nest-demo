const express=require('express');
const routes=require('./routes')
const https=require('https');
const fs=require('fs');
const app=express();

const options={
    cert:fs.readFileSync(`${__dirname}/assets/certi/nodejs.crt`),
    key:fs.readFileSync(`${__dirname}/assets/certi/nodejs.key`),
}
const server=https.createServer(options,app);

app.use(express.json());
app.use(express.urlencoded({extens:true}));
app.use('/',routes);

server.listen('1111',function(){
    console.log('server start')
})