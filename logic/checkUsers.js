"use strict";

let User = require('../models/User');
const cronJob = require('./cronJobs');
const request = require('./request');
const myEmitter = require('./events');

module.exports = callback => {
  User.find({}, (err, users) => {
    let data = users.map(u => {
      return {
        // mobileNumber: u.mobileNumber,
        action: "balance"
      }
    });
    return Promise.resolve()
      .then(()=>{
        return request.getPredictions(data);
      })
      .then(res=>{
        callback(res);
        console.log(res);
      })
  });
}
