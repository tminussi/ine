const dynamodb = require('../storage/dynamo-db')

const put = async data => {
    return await dynamodb.put(data)
}

module.exports = {
    put
}