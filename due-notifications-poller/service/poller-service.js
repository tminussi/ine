const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.AWS_REGION
})

const SQS = new AWS.SQS()

const docClient = new AWS.DynamoDB.DocumentClient()

const poll = async () => {
    const data = await docClient.scan({
        TableName: process.env.INE_NOTIFICATIONS_TABLE,
        FilterExpression: 'next_notification < :now',
        ExpressionAttributeValues: {
            ':now': new Date().getTime()
        }
    }).promise()
    console.log('data found: ', data)
    for (const notification of data.Items) {
        console.log('sending message to SQS...')
        try {
            await SQS.sendMessage({
                QueueUrl: process.env.INE_QUEUE_URL,
                MessageBody: JSON.stringify(notification.caregiver_details)
            }).promise()
        } catch (e) {
            console.log(e)
        }
        console.log('deleting from DynamoDB...')
        await docClient.delete({
            TableName: process.env.INE_NOTIFICATIONS_TABLE,
            Key: {
                id: notification.id
            }
        }).promise()
    }
    return Promise.resolve({})
}

module.exports = {
    poll
}