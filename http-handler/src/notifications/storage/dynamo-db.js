const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.AWS_REGION
})

const documentClient = new AWS.DynamoDB.DocumentClient()

const put = async data => {
    return (await documentClient.put({
        TableName: process.env.INE_NOTIFICATIONS_TABLE,
        Item: data,
        ReturnValues: 'ALL_OLD'
    }).promise()).Attributes
}

const fetchOne = async id => {
    return (await documentClient.get({
        TableName: process.env.INE_REGISTRATIONS_TABLE,
        Key: {
            id: id
        }
    }).promise()).Item
}

module.exports = {
    put,
    fetchOne
}