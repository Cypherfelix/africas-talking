const Africastalking = require('africastalking');
// Install the africas talking Library from npmjs. const Africas talking = require('africas talking');
const AT = Africastalking({ username: 'your-app-username', apiKey: 'your-apikey' }).AIRTIME;
// Get your app's username and api key from https://account.africastalking.com
const sendAirtime = async () => {
    const output = await AT.send({
        maxNumRetry: 1,
        recipients: [
            {
                phoneNumber: '+254xxxxxxxx', amount: 05, currencyCode: 'KES'
            },
            {
                phoneNumber: '+254yyyyyyyy', amount: 36, currencyCode: 'KES'
            },
        ],
    });
    console.log(output.response);
};
// sendAirtime();

module.exports = { sendAirtime }