"use strict";

let User = require('../models/User');
const cronJob = require('./cronJobs');
const request = require('./request');

function checkUser() {
  User.find({}, users => {
    let data = users.map(u => {
      return {
        mobileNumber: u.mobileNumber,
        action: "balance"
      }
    });
    return Promise.resolve()
      .then(()=>{
        return request.getPredictions(data);
      })
      .then(res=>{
        console.log(res);
      })
  })
}

// cronJob(checkUser);