const CompanyModel = require("../models/Company");
const Student = require("../models/Student");

const updateCompany = async (req, res) => {
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

exports.modules = { updateCompany };
