"use strict";

let CronJob = require('cron').CronJob;

module.exports = recurrentFn => {
  new CronJob('* * * * * *', recurrentFn, null, true, 'America/Los_Angeles');
};
