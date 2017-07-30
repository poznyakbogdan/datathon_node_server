"use strict";

let User = require('../models/User');
const cronJob = require('./cronJobs');
const request = require('./request');
const myEmitter = require('./events');

module.exports = callback => {
  let result = [];
  User.find({}, (err, users) => {
    let data = users.map(u => {
      return {
        // mobileNumber: u.mobileNumber,
        action: "balance"
      }
    });
    return Promise.resolve()
      .then(()=>{
        return request.getLoyalties(data);
      })
      .then(res=>{
        return request.getBalances(data)
      })
      .then(res=>{
        callback(res);
        console.log(res);
      })
  });
}
