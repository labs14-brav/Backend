const router = require("express").router();
const RelationshipsController = require("../controllers/RelationshipsController");

router.route("/").get(RelationshipsController.all);

module.exports = router;
