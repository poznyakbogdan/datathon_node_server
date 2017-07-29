"use srtict";

const request = require('./request');

function getPrediction(user, action) {
  return request.getPrediction(user.mobileNumber, action)
}

function getPredictions(data) {
  return request.getPredictions(data);
}

module.exports = {
  getPrediction: getPrediction,
  getPredictions: getPredictions
};
