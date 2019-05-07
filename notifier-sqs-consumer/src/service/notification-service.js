const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.AWS_REGION
})

const SES = new AWS.SES()

const client = require('twilio')(process.env.TWILLIO_ACCOUNT_SID, process.env.TWILLIO_AUTH_TOKEN);

const notify = async data => {
    console.log('data loaded', data)
    let message = 'PANIC BUTTON PUSHED. REACT NOW!';
    if (data.level === 'OK') {
        message = 'Beloved one has not pushed the button in a while. You should check'
    }
    try {
        if (data.caregiver_email) {
            console.log(`sending email to ${data.caregiver_email}..., `)
            await SES.sendEmail({
                Destination: {
                    ToAddresses: [data.caregiver_email]
                },
                Message: {
                    Body: {
                        Text: {
                            Charset: "UTF-8",
                            Data: message
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
            console.log(`sending SMS to ${data.caregiver_phone}..., `)
            await client.messages
                .create({
                    body: message,
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