/**
 * Dependencies
 */

const Relationships = require("../models/Relationships");

/**
 * Define controller
 */

class RelationshipsController {
  static async all(req, res) {
    try {
      const relationships = await Relationships.find();

      return res.status(200).json(relationships);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const relationship = await Relationships.findById(id);
      if (relationship) {
        return res.status(200).json(relationship);
      } else {
        //404
      }
    } catch (error) {
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

module.exports = RelationshipsController;
