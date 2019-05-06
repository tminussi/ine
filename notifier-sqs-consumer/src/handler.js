'use strict';

const notificationService = require('./service/notification-service')

module.exports.consumer = async (event) => {
  console.log('message received', event)
  for (const record of event.Records) {
    await notificationService.notify(JSON.parse(record.body))
  }
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
