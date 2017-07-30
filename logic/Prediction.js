"use srtict";

const request = require('./request');

function getLoyalty() {
  return request.getLoyalty()
}

function getLoyalties(data) {
  return request.getLoyalties(data);
}

function getBalance() {
  return request.getBalance()
}

function getBalances(data) {
  return request.getBalances(data);
}

module.exports = {
  getLoyalty: getLoyalty,
  getLoyalties: getLoyalties,
  getBalance: getBalance,
  getBalances: getBalances
};
