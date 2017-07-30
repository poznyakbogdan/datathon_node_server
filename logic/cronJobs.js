"use strict";

let CronJob = require('cron').CronJob;

module.exports = recurrentFn => {
  new CronJob('00 * * * * *', recurrentFn, null, true, 'America/Los_Angeles');
};
