"use strict";
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Invoices = require("../models/Invoices");

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
      console.log(req.body)
      delete req.body.email
      delete req.body.uid
      const new_invoice = await Invoices.create(req.body);
      console.log(req.body)

      res.status(201).json(new_invoice);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  static async getById(req, res) {
    try {
      const fetched_invoice = await Invoices.find(req.params.id);

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
}


/**
 * Export controller
 */

module.exports = InvoicesController;
