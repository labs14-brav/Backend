"use strict";

/**
 * Dependencies
 */

const Mediator = require("../models/Mediator");
const SendGrid = require("../initializers/SendGrid");
const Case = require("../models/Case");
const MediatorCase = require("../models/MediatorCase");
const axios = require("axios");

/**
 * Define controller
 */

class MediatorsController {
  static async index(req, res) {
    try {
      const mediators = await Mediator.all(req.query);
      res.status(200).json(mediators);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  static async mediatorEmail(req, res) {
    try {
      console.log("req.body", req.body);
      const mediator = await Mediator.find(req.params.id);
      const fetchCase = await Case.find(req.body.case_id);

      if (mediator) {
        await MediatorCase.create({
          mediator_id: mediator.id,
          case_id: fetchCase.id
        });
        await SendGrid.sendMediatorRequestEmail({
          mediator_email: mediator.email,
          user_email: req.body.email,
          dispute_category: fetchCase.dispute_category
        });
        res.status(200).json({ message: "Email sent." });
      } else {
        res.status(404).json({ message: "Mediator not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  static async stripeConnect(req, res) {
    const { email, code } = req.body;
    console.log("code", code);
    try {
      const mediator = await Mediator.getUserByEmail(email);
      if (mediator) {
        axios
          .post("https://connect.stripe.com/oauth/token", {
            client_secret: process.env.STRIPE_KEY,
            code: code,
            grant_type: "authorization_code"
          })
          .then(async result => {
            const stripeUserId = result.data.stripe_user_id;
            await Mediator.saveStripeUserId(email, stripeUserId);
            res.status(200).json({ message: "Stripe success!" });
          })
          .catch(err => {
            console.error(err);
            res
              .status(500)
              .json({ error: { message: "Internal Server Error" } });
          });
      } else {
        res.status(500).json({ error: { message: "Internal Server Error" } });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }
}

/**
 * Export controller
 */

module.exports = MediatorsController;
