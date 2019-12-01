'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require("body-parser");
var SerialPort = require("serialport")
var fs = require('fs');
var util = require("util");

let led = null;

//app.use(express.static(__dirname + '/public'));
app.use("/style", express.static(__dirname + '/style'));
app.use("/media", express.static(__dirname + '/media'));
app.use("/blockly", express.static(__dirname + '/blockly'));
app.use("/code", express.static(__dirname + '/code'));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/index.html')
});

var board = new five.Board({
  port: "COM6"
});

five.Board(board).on('ready', function() {
  
  console.log('Arduino is ready.');

  let cuarto = new five.Led(2);
  let tv = new five.Led(3);
  let riego = new five.Led(4);
  let baño = new five.Led(5);
  let sala = new five.Led(6);
  let puerta = new five.Led(7);
  
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/uri',(req, res)=>{
    let flag = 0;
    let errorMsg = '';
    let json = '';
    app.use(cors());
    cuarto.off();
    tv.off();
    riego.off();
    baño.off();
    sala.off();
    puerta.off();
    let codigo = req.body.data;
    
    try{
      eval(codigo);
    }catch(error){
      errorMsg += error;
      flag = 1;
    }
    
    
    if(flag == 0){
      json += eval(codigo);
      res.json("Compilación correcta");
      console.log("entrp");
    }if(flag == 1){
      res.send(errorMsg);
    }
  });

});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);

