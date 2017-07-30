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
  let user = new User({
    androidId: req.body.user.androidId,
    mobileNumber: req.body.user.mobileNumber,
    createdAt: Date.now()
  });
  user.save();
  res.json(user);
});

router.post('/prediction', (req, res)=>{
  let result = {};
  return Promise.resolve()
    .then(()=>{
      return User.findOne({androidId: req.body.androidId}, user=>{ return user });
    })
    .then(user=>{
      result.androidId = user.androidId;
      return Prediction.getLoyalty()
    })
    .then(data => {
      result.loyalty = data.value;
      return Prediction.getBalance()
    })
    .then(data=>{
      result.balance = data.value;
      res.json(result);
    })
});

module.exports = router;
