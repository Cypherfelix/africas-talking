const express = require('express')
const sendSMS = require('./utils/sendSms')
const app = express()
const port = 3000

sendAirtime();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})