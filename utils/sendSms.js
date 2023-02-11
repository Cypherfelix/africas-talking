const AfricasTalking = require('africastalking');

const AT = AfricasTalking({ username: 'cypher254', apiKey: '62cd6782bfe16f8aa22de3c29aae3fc275d9fcdb2cbf0cb9bcc91199bd093ece' }).SMS;
const sendSMS = async ({ number, message }) => {
    const output = await AT.send({
        to: [number],
        message: message,
        enqueue: true,
    });

    console.log({ output });
}

module.exports = sendSMS;