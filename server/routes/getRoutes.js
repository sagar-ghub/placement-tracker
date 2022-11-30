const express = require("express");
const getController = require("../controller/getController");
const router = express.Router();

router.get("/result", getController.getResults);
router.get("/companies", getController.getCompanies);
router.get("/students", getController.getStudents);
router.get("/student/:id", getController.getStudentById);
router.get("/companyResult/:id", getController.getStudentResultById);
router.get("/unregisteredCandidates/:id", getController.getStudentsByCompany);
module.exports = router;
