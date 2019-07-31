const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const cases = require('../../data/dbConfig');

const message = {
    to: 'brennuck@gmail.com',
    from: 'labs14brav@gmail.com',
    subject: "Mediator Request!",
    text: `
    You've been requested as a mediator!

    User email: ${cases.user_email}
    Dispute Category: ${cases.dispute_category}

    Login for more info`,
};

sgMail.send(message);

// echo "export SENDGRID_API_KEY='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'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env