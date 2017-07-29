"use strict";

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Prediction = require('../logic/Prediction');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/new', (req, res) => {
  console.log(req);
  let user = new User({
    androidId: req.body.user.androidId,
    mobileNumber: req.body.user.mobileNumber,
    createdAt: Date.now()
  });
  user.save();
  res.json(user);
});

router.post('/prediction', (req, res)=>{
  return Promise.resolve()
    .then(()=>{
      return User.findOne({androidId: req.body.user.androidId}, user=>{ return user });
    })
    .then(user=>{
      return Prediction.getPrediction(user, req.body.action);
    })
    .then(data=>{
      res.json(data);
    })
});


module.exports = router;
