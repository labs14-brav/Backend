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
        return res.status(404).json({
          message: "The relationship with the specified ID does not exist."
        });
      }
    } catch (error) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async create(req, res) {
    const { user_id, mediator_id } = req.body;
    try {
      const newRelationship = await Relationships.create(user_id, mediator_id);

      res.status(201).json(newRelationship);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: { message: "Internal Server Error" } });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    try {
      const editedRelationship = await Relationships.update(id, req.body);
      if (editedRelationship) {
        return res.status(200).json(editedRelationship);
      } else {
        return res.status(404).json({
          message: "The relationship you tried to update does not exist."
        });
      }
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
    }
  }

  static async remove(req, res) {
    const { id } = req.params;
    try {
      const deletedRelationship = await Relationships.remove(id);
      if (deletedRelationship) {
        return res.status(200).json(deletedRelationship);
      } else {
        return res.status(404).json({
          message: "The relationship you tried to delete does not exist."
        });
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

module.exports = RelationshipsController;
