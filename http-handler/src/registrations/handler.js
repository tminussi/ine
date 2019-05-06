'use strict';

const registrationService = require('./service/registration-service')

module.exports.register = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Registration Successful',
      data: await registrationService.put(JSON.parse(event.body)),
    }),
  };
};
