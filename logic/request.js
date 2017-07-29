"use strict";

const request = require('request-promise');
const config = require('config');
const PREDICTION_API = config.get('prediction.url');

function getPrediction(mobileNumber, action) {
  // return request({
  //   method: "POST",
  //   uri: `${PREDICTION_API}/prediction`,
  //   body: {
  //     mobileNumber: mobileNumber,
  //     action: action
  //   }
  // })
  return {
    mobileNumber: mobileNumber,
    action: action,
    value: Math.random()
  }
}

function getPredictions(data) {
  return [{data: data, value: 1}, {data: data, value: 2}, {data: data, value: 3}]

  // return request({
  //   method: "POST",
  //   uri: `${PREDICTION_API}/predictions`,
  //   body: data
  // })
}

module.exports = {
  getPrediction: getPrediction,
  getPredictions: getPredictions
};