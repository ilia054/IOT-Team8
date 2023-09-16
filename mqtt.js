// const mqtt = require('mqtt');

// // MQTT broker details
// const brokerUrl = 'mqtt://hairdresser.cloudmqtt.com:15697'; // Replace with your broker's URL and port
// const username = 'weftpnrz'; // Replace with your MQTT username
// const password = 'c-bBNA60FjH2'; // Replace with your MQTT password
// const topic = 'braude/teams/team8'; // The topic you want to subscribe to
// var value = 30;
// const client = mqtt.connect(brokerUrl, {
//     username: username,
//     password: password
// });

// client.on('connect', () => {
//     console.log('Connected to MQTT broker');
//     client.subscribe(topic);
// });

// client.on('message', (topic, message) => {
//     var newValue = parseFloat(message.toString());
//     console.log(`Received message on topic '${topic}': ${message.toString()}`);
//     value = newValue;
//     // Process the received data here
// });

// client.on('error', (error) => {
//     console.error('MQTT Error:', error);
// });

// // Close the client when needed
// // client.end();
