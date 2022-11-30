const CompanyModel = require("../models/Company");
const ResultModel = require("../models/Result");
const Student = require("../models/Student");

const createStudent = async (req, res) => {
  const obj = req.body;

  const student = new Student({
    name: obj.name,
    email: obj.email,
    registrationNo: obj.registrationNo,

    phone: obj.phone,
    address: obj.address,
  });

  try {
    await student.save();
    res.status(201).send(student);
  } catch (e) {
    res.status(400).send(e);
  }
};
const createCompany = async (req, res) => {
  const obj = req.body;

  const company = new CompanyModel({
    name: obj.name,
    website: obj.website,
    ctc: obj.ctc,
    vacancies: obj.vacancies,
  });

  try {
    await company.save();
    res.status(201).send(company);
  } catch (e) {
    res.status(400).send(e);
  }
};

const createResult = async (req, res) => {
  const obj = req.body;
  console.log(obj);
  const result = new ResultModel({
    student: obj.student,
    company: obj.company,
    round: obj.round,
    remarks: obj.remarks,
  });
  const student = { student: obj.student, status: obj.status };
  const company = { company: obj.company, status: obj.status };
  try {
    await result.save();
    Student.findByIdAndUpdate(
      obj.student,
      { $push: { companies: company } },
      null,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Original Doc : ", docs);
        }
      }
    );
    CompanyModel.findByIdAndUpdate(
      obj.company,
      { $push: { students: student } },
      null,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Original Doc : ", docs);
        }
      }
    );

    res.status(201).send({ result });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

module.exports = { createStudent, createCompany, createResult };
