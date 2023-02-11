const AfricasTalking = require('africastalking');

const AT = AfricasTalking({ username: 'cypher254', apiKey: '62cd6782bfe16f8aa22de3c29aae3fc275d9fcdb2cbf0cb9bcc91199bd093ece' }).SMS;
const sendSMS = async () => {
    const output = await AT.send({
        to: ['+254713416430'],
        message: 'Hello Felix!',
        enqueue: true,
    });

    console.log({ output });
}

sendSMS();

// module.exports = sendSMS;