"use strict";

/**
 * Define controller
 */

class InvoicesController {
  static index(req, res) {
    res.status(200).json("Invoices!");
  }

  static async sessions(req, res) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Cucumber from Roger's Farm",
            amount: 200,
            currency: "usd",
            quantity: 10
          }
        ],
        payment_intent_data: {
          application_fee_amount: 200,
          transfer_data: {
            destination: "{{CONNECTED_STRIPE_ACCOUNT_ID}}"
          }
        },
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel"
      });

      res.status(200).json({ session: session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

/**
 * Export controller
 */

module.exports = InvoicesController;
