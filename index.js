const express = require('express');
const bodyParser = require('body-parser');
const send = require('./utils/sendSms');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send("Hello");
})
app.post('/', (req, res) => {
    let id = '';
    let date = '';
    let description = '';
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome to Health Check
        1. Schedule A Check up
        2. Cancel a check up
        3. Send Prescriptions`;
    } else if (text.includes('#')) {
        response = `END Thank You For Using Our System`;
    } else if (text == '1') {
        // Business logic for first level response
        response = `CON Enter Patient Id
        # cancel`;
    } else if (text.split('*').length == 2) {
        id = text.split('*')[1]
        response = `CON Enter Date in (dd/MM/YYYY)
        # cancel`;
    } else if (text.split('*').length == 3) {
        response = `CON Enter Time in (hh:mm)
        # cancel`;
    } else if (text.split('*').length == 4) {
        response = `CON Enter Number
        # cancel`;
    } else if (text.split('*').length == 5) {
        response = `CON Select an option
        1. Send
        # cancel`;
    } else if (text.split('*').length == 6) {
        console.log(text);
        let det = text.split('*');
        send({ number: `+${det[4]}`, message: `Hospital check up scheduled for ${det[3]} at ${det[4]}` });
        response = `END Message sent to  +${det[4]}
        # cancel`;
    }
    else if (text == '2') {
        // Business logic for first level response
        // This is a terminal request. Note how we start the response with END
        response = `END Your phone number is ${phoneNumber}`;
    } else if (text == '1*1') {
        // This is a second level response where the user selected 1 in the first instance
        const accountNumber = 'ACC100101';
        // This is a terminal request. Note how we start the response with END
        response = `END Your account number is ${accountNumber}`;
    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`);
})