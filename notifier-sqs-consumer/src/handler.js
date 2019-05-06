'use strict';

const sesService = require('./service/ses-service')

module.exports.consumer = async (event) => {
  console.log('message received', event)
  for (const record of event.Records) {
    await sesService.sendEmail(JSON.parse(record.body))
  }
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
