const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
    to: 'brennuck@gmail.com',
    from: 'donotreply@info.com',
    subject: "Your case info!",
    text: 'case number: yada yada',
};

sgMail.send(message);

// echo "export SENDGRID_API_KEY='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'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env