//mongoose "mongodb+srv://cluster0.odqpocw.mongodb.net/myFirstDatabase" --apiVersion 1 --username nkverma1314
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nkverma1314:ASDFGhjkl@cluster0.odqpocw.mongodb.net/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const Device = require('./models/device');
const Device1 = require('./models/device1');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 5000;

app.get('/api/devices', (req, res) => {
  Device.find({}, (err, devices) => {
    if (err == true) {
      return res.send(err);
    } else {
      return res.send(devices);
    }
  });
});

app.post('/data/devices', (req, res) => {
  const { id, password, sensorData } = req.body;
  const newDevice = new Device({
    id,
    password,
    sensorData
  });
  newDevice.save(err => {
    return err
      ? res.send(err)
      : res.send('successfully added device and data');
  });
});

// app.post('/user-data/devices', (req, res) => {
//   const { id, password, sensorData } = req.body;
//   const newDevice = new Device1({
//     id,
//     password,
//     sensorData
//   });
//   newDevice.save(err => {
//     return err
//       ? res.send(err)
//       : res.send('successfully added device and data');
//   });
// });

// app.post('/data/devices', (req, res) => {
//   const { id, password } = req.body;
//   const newDevice = new Device2({
//     id,
//     password
//   });
//   newDevice.save(err => {
//     return err
//       ? res.send(err)
//       : res.send('successfully added device and data');
//   });
// });

app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

// app.get('/api/devices', (req, res) => {
//   Device.find({}, (err, devices) => {
//     return res.send(devices);
//   });
// });

// app.get('/api/devices', (req, res) => {
//   Device.find({}, (err, devices) => {
//    return err
//      ? res.send(err)
//      : res.send(devices);
//   });
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
