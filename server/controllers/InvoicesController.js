"use strict";

/**
 * Dependencies
 */

const stripe = require("stripe")(process.env.STRIPE_KEY);
const SendGrid = require("../initializers/SendGrid");
const Invoice = require("../models/Invoice");
const Case = require("../models/Case");
const User = require("../models/User");

/**
 * Define controller
 */

class InvoicesController {
  static index(req, res) {
    res.status(200).json("Invoices!");
  }

  static async sessions(req, res) {
    try {
      const invoice = await Invoice.find(req.params.id)

      if (invoice) {
        const fetchCase = await Case.find(invoice.case_id)
        const mediator = await User.getUserById(invoice.mediator_id)

        if (fetchCase && mediator) {
          const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                amount: invoice.amount * 100, // REQUIRED
                name: "Mediation Services", // REQUIRED
                currency: "usd", // REQUIRED
                quantity: 1 // REQUIRED
              }
            ],
            payment_intent_data: {
              // Calculate Brav platform fee at 30% amount.
              application_fee_amount: invoice.amount * 0.3,
              transfer_data: {
                destination: mediator.stripe_user_id
              }
            },
            payment_method_types: ["card"], // REQUIRED
            success_url: `${process.env.REACT_APP_URL}/stripe/checkout/callback`, // REQUIRED
            cancel_url: `${process.env.REACT_APP_URL}/cases`, // REQUIRED
            customer_email: fetchCase.user_email
          });

          res.status(200).json({ session: session });
        } else {
          res.status(404).json({ message: "Mediator not found" });
        }
      } else {
        res.status(404).json({ message: "Invoice not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async create(req, res) {
    try {
      delete req.body.email
      delete req.body.uid
      const new_invoice = await Invoice.create({
        case_id: req.params.id,
        mediator_id: req.body.mediator_id,
        amount: req.body.amount,
        hours: req.body.hours,
      });

      const fetchedCase = await Case.find(req.params.id)

      if (fetchedCase && fetchedCase.user_email) {
        SendGrid.sendPendingInvoiceEmail({
          amount: req.body.amount,
          user_email: fetchedCase.user_email,
        })
      }

      res.status(201).json(new_invoice);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  static async getById(req, res) {
    try {
      const fetched_invoice = await Invoice.find(req.params.id);

      if (fetched_invoice) {
        res.status(200).json(fetched_invoice);
      } else {
        res.status(404).json({ errer: { message: "Not Found" } });
      }
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async getByCaseId(req, res) {
    try {
      const fetched_invoices = await Invoice.findByCaseId(req.params.id);
      res.status(200).json(fetched_invoices);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async payed(req, res) {
    try {
      await Invoice.payed(req.params.id);
      res.status(200).json({ message: "Successfully updated invoice" });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }

  }
}


/**
 * Export controller
 */

module.exports = InvoicesController;
