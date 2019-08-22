/**
 * Dependencies
 */

const sendgrid = require('@sendgrid/mail');

/**
 * Initialize sendgrid
 */

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Define SendGrid
 */

class SendGrid {
  static sendMediatorRequestEmail(info) {
    const message = {
      to: info.mediator_email,
      from: 'labs14brav@beabravone.com',
      subject: "Mediator Request!",
      text: "Email template failed",
      template_id:"d-16b1a85dd5554c30a211f12b8d535db0"
    };

    sendgrid.send(message);
  }

  static sendPendingInvoiceEmail(info) {
    const message = {
      to: info.user_email,
      from: 'labs14brav@beabravone.com',
      subject: "New Invoice",
      text: "Email template failed",
      template_id:"d-43ed83001d0b44d695547e205f5e06b2",
      dynamic_template_data: {
        amount: `$ ${info.amount}`
      }
    };

    sendgrid.send(message);
  }
}

/**
 * Export SendGrid
 */

module.exports = SendGrid
