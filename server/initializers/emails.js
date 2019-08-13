const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail(info) {
    const message = {
        to: info.mediator_email,
        from: 'labs14brav@beabravone.com',
        subject: "Mediator Request!",
        text: "Email template failed",
        template_id:"d-16b1a85dd5554c30a211f12b8d535db0"
    };

    sgMail.send(message);
}

module.exports = sendMail