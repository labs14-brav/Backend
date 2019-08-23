const moment = require("moment");
("use strict");

/**
 * Dependencies
 */

const Case = require("../models/Case");

/**
 * Define controller
 */

class CasesController {
  static async index(req, res) {
    try {
      const cases = await Case.all(req.body.email);

      return res.status(200).json(cases);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async indexById(req, res) {
    const id = req.params.id;

    try {
      const caseById = await Case.findById(id);
      return res.status(200).json(caseById);
    } catch (error) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async create(req, res) {
    try {
      const new_case = await Case.create(req.body);

      res.status(201).json(new_case);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  static async show(req, res) {
    try {
      const fetched_case = await Case.find(req.params.id);

      if (fetched_case) {
        res.status(200).json(fetched_case);
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

  static async acceptCase(req, res) {
    try {
      const id = req.params.id;
      //set object for update. Accepted -> type = mediator, and timestamp
      let toUpdate = {
        case_accepted_at: moment().format("MMMM Do, h:mm a"),
        case_declined_at: null
      };
      const accepted = await Case.acceptCase(id, toUpdate);
      if (accepted) {
        res.status(200).json(accepted);
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async declineCase(req, res) {
    try {
      const id = req.params.id;
      //set object for update. Decline, so type is reverted back to user, and timestamped.
      let toUpdate = {
        case_declined_at: moment().format('MMMM Do, h:mm a'),
        case_accepted_at: null
      }
      //console.log('toUpdate', toUpdate)
      const declined = await Case.declineCase(id, toUpdate);
      if (declined) {
        res.status(200).json(declined);
      } else {
        res.status(500).json({message: 'Internal Server Error'})
      }
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
    }
  }

  static async completeCase(req, res) {
    try {
      const id = req.params.id;
      //set object for update. Decline, so type is reverted back to user, and timestamped.
      let toUpdate = {
        case_completed_at: moment().format('MMMM Do, h:mm a')
      }
      //console.log('toUpdate', toUpdate)
      const completed = await Case.completeCase(id, toUpdate);
      if (completed) {
        res.status(200).json(completed);
      } else {
        res.status(500).json({message: 'Internal Server Error'})
      }
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
    }
  }

  static async getPendingCases(req,res){
    try{
      const mediatorId = req.params.id;
      const fetch_cases = await Case.findPendingCases(mediatorId);

      if(fetch_cases){
        res.status(200).json({fetch_cases})
      }else{
        res.status(500).json({message:'Internal Server Error'})
      }

    }catch(err){
      console.error(err);
      res.status(500).json({message:'Internal Server Error'})
    }

  }

  static async getActiveCases(req,res){
    const mediatorId = req.params.id;
    try{
      const fetch_cases = await Case.findAcceptedCases(mediatorId);

      if(fetch_cases){
        res.status(200).json({fetch_cases})
      }else{
        res.status(500).json({message:'Internal Server Error'})
      }

    }catch(err){
      console.error(err);
      res.status(500).json({message:'Internal Server Error'})
    }

  }

  static async getCompletedCases(req,res) {
    const mediatorId = req.params.id;
    try {
      const fetch_cases = await Case.findCompletedCases(mediatorId);

      if (fetch_cases) {
        res.status(200).json({fetch_cases})
      } else {
        res.status(500).json({ message:'Internal Server Error' })
      }

    } catch(err) {
      console.error(err);
      res.status(500).json({ message:'Internal Server Error' })
    }

  }

  static async all(req, res) {
    try {
      const cases = await Case.allCases();

      return res.status(200).json(cases);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async delete(req, res) {
    try {
      await Case.delete(req.params.id, req.body.email);

      return res.status(200).json({ message: "Successfully deleted a case" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

}

/**
 * Export controller
 */

module.exports = CasesController;
