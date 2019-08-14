"use strict";

/**
 * Dependencies
 */

const stripe = require("stripe")(process.env.STRIPE_KEY);
const SendGrid = require("../initializers/SendGrid");
const Invoice = require("../models/Invoice");
const Case = require("../models/Case");

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
            destination: "acct_1F5gERCIFmSQSbc6"
          }
        },
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel"
      });

      console.log(session);

      res.status(200).json({ session: session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async create(req, res) {
    try {
      delete req.body.email
      delete req.body.uid
      const new_invoice = await Invoice.create(req.body);

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
}


/**
 * Export controller
 */

module.exports = InvoicesController;
