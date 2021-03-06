const dynamodb = require('../storage/dynamo-db')
const intervals = require('./interval.json')
const AWS = require('aws-sdk')
AWS.config.update({
    region: process.env.AWS_REGION
})

const SQS = new AWS.SQS()

const put = async data => {
    console.log(data.level)
    const caregiver = await dynamodb.fetchOne(data.source_id)
    if (data.level.toUpperCase() === 'PANIC') {
        console.log('sending message to... ', process.env.INE_QUEUE_URL)
        try {
            await SQS.sendMessage({
                QueueUrl: process.env.INE_QUEUE_URL,
                MessageBody: JSON.stringify(caregiver)
            }).promise()
            console.log('message sent successfully to SQS', caregiver)
        } catch (e) {
            console.log(e)
        }
        return Promise.resolve({
            message: 'Your caregiver will be notified immediately!'
        })
    }
    data.id = Buffer.from(data.source_id, 'utf-8').toString('base64')
    data.caregiver_details = caregiver
    data.next_notification = new Date().getTime() + intervals[data.caregiver_details.interval]
    data.message = 'Thanks for letting us know you are OK.'
    return await dynamodb.put(data)

}

module.exports = {
    put
}