const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const users = require('./data/dbConfig');

const message = {
    to: 'brennuck@gmail.com',
    from: 'donotreply@info.com',
    subject: "Mediator Request!",
    text: `
    You've been requested as a mediator!

    User email: ${users.email}
    Dispute Category: ${users.dispute_category}

    Login for more info`,
};

sgMail.send(message);

// echo "export SENDGRID_API_KEY='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'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env