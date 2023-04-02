const express = require("express");
const alumniController = require("../controllers/alumniController");
const fetchAlumni= require('../middleware/fetchAlumni')


const router = express.Router();

router.route("/").get(alumniController.getAllAlumnis);

router.route("/:id").get(fetchAlumni, alumniController.getAlumni);
router.route("/").post(alumniController.addAlumni);
router.route("/:id").put(fetchAlumni, alumniController.updateAlumni);
router.route("/:id").delete(alumniController.deleteAlumni);

module.exports = router;
