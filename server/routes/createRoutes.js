const express = require("express");
const createController = require("../controller/createContoller");
const router = express.Router();

router.post("/student", createController.createStudent);
router.post("/company", createController.createCompany);
router.post("/result", createController.createResult);

module.exports = router;
