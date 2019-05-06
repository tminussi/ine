'use strict';

const notificationService = require('./service/notification-service')

module.exports.notify = async (event) => {
  const data = await notificationService.put(JSON.parse(event.body))
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: data
    }),
  };
};
