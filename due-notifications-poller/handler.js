'use strict';

const pollerService = require('./service/poller-service')

module.exports.poller = async (event) => {
  await pollerService.poll()
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
