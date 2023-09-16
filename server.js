const express = require('express');
const path = require('path');
const mqtt = require('mqtt'); // Import the mqtt package
const cors = require('cors');

const app = express();
const portURI = 8000;
const URI = path.join(__dirname, "index.html");

// MQTT broker details
const brokerUrl = 'mqtt://hairdresser.cloudmqtt.com:15697'; // Replace with your broker's URL and port
const username = 'weftpnrz'; // Replace with your MQTT username
const password = 'c-bBNA60FjH2'; // Replace with your MQTT password
const topic = 'braude/teams/team8/Balance'; // The topic you want to subscribe to
const topic_weight = 'braude/teams/team8/TotalWeight'; // The topic you want to subscribe to
var Balance = 45;
var totalWeightValue=0;

app.use(cors());
const client = mqtt.connect(brokerUrl, {
    username: username,
    password: password
});

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe(topic);
    client.subscribe(topic_weight);
});

client.on('message', (topic, message) => {
  var newResult = parseFloat(message.toString());
  console.log(`Received message From M5  ${topic}': ${message.toString()}`);
  if(topic==='braude/teams/team8/Balance')
    Balance = newResult
  else
    totalWeightValue = newResult
  // Process the received data here
});


client.on('error', (error) => {
    console.error('MQTT Error:', error);
});

app.use('/content', express.static(__dirname + '/Content'));

app.get('/',(req, res)=> { return res.sendFile(URI) });

app.get('/Balance', (req, res) => {
  const returnedValue = JSON.stringify(Balance)
  res.send(returnedValue);
})

app.get('/TotalWeight', (req, res) => {
  const returnedValue = JSON.stringify(totalWeightValue)
  res.send(returnedValue);
})

app.listen(portURI, () => {
  console.log('API CONNECTED');
})


  