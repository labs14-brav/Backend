const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail(info) {
    const message = {
        to: info.mediator_email,
        from: 'labs14brav@gmail.com',
        subject: "Mediator Request!",
        text: `
        You've been requested as a mediator!
    
        User email: ${info.user_email}
        Dispute Category: ${info.dispute_category}
    
        Login for more info`,
    };

    sgMail.send(message);
}

module.exports = sendMail