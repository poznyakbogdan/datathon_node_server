"use strict";

const request = require('request-promise');
const config = require('config');
const PREDICTION_API = config.get('prediction.url');
const multReqJson = require('../reqData/multReq.json');
const reqJson = require('../reqData/req.json');
const _ = require('lodash');
const CARD = 1026729;

function getLoyalty() {
  return request({
    method: "POST",
    uri: `${PREDICTION_API}/loyalty`,
    body: reqJson,
    json: true
  });
}

function getLoyalties(data) {
  let req = data.map(() => {
    return reqJson;
  });
  return request({
    method: "POST",
    uri: `${PREDICTION_API}/loyalties`,
    body: req,
    json: true
  })
}

function getBalance() {
  return request({
    method: "POST",
    uri: `${PREDICTION_API}/balance`,
    body: {
      day: new Date(new Date().getTime() + 1000*3600*48).getDate(),
      card: CARD
    },
    json: true
  });
}

function getBalances(data) {
  let req = data.map(()=>{
    return {
      day: new Date(new Date().getTime() + 1000*3600*48).getDate(),
      card: CARD
    }
  });
  return request({
    method: "POST",
    uri: `${PREDICTION_API}/balances`,
    body: req,
    json: true
  })
}

module.exports = {
  getLoyalty: getLoyalty,
  getLoyalties: getLoyalties,
  getBalance: getBalance,
  getBalances: getBalances
};