const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.AWS_REGION
})

const SES = new AWS.SES()

const client = require('twilio')(process.env.TWILLIO_ACCOUNT_SID, process.env.TWILLIO_AUTH_TOKEN);

const notify = async data => {
    console.log(`sending email to ${data.caregiver_email}..., `)
    try {
        if (data.caregiver_email) {
            await SES.sendEmail({
                Destination: {
                    ToAddresses: [data.caregiver_email]
                },
                Message: {
                    Body: {
                        Text: {
                            Charset: "UTF-8",
                            Data: "Your loved one has pushed the PANIC button and needs HELP."
                        }
                    },
                    Subject: {
                        Charset: "UTF-8",
                        Data: "ATTENTION: INTERVENTION REQUIRED"
                    }
                },
                Source: data.caregiver_email,
                ReplyToAddresses: [data.caregiver_email],
            }).promise()
        }
        if (data.caregiver_phone) {
            await client.messages
                .create({
                    body: 'Beloved one is not doing well!',
                    from: process.env.TWILLIO_FROM_PHONE_NUMBER,
                    to: data.caregiver_phone
                })

        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    notify
}