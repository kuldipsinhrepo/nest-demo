const express=require('express');
const socket=require('socket.io');
const jwt=require('jsonwebtoken');
const routes=require('./routes');
const http=require('http');
const app=express();
//const server=http.createServer(app);
const https=require('https');
const fs=require('fs');


const options={
    cert:fs.readFileSync(`${__dirname}/certi/nodejs.crt`),
    key:fs.readFileSync(`${__dirname}/certi/nodejs.key`),
}
const server=https.createServer(options,app);




app.use(express.json());
app.use(express.urlencoded({extens:true}))
app.use('/',routes);

const io=socket(server);

io.on('connection',function(socket){
    socket.join('room1');
    console.log('socket id is:'+socket.id)
    socket.on('msg',function(data){
        console.log(data)
        //io.emit('recevied',data)
        socket.to('room1').emit('recevied',data);
    })

})

server.listen('7777',()=>{
    console.log("Server start")
})

