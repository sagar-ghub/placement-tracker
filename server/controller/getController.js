const Company = require("../models/Company");
const Result = require("../models/Result");
const Student = require("../models/Student");

const getResults = async (req, res) => {
  Result.find()
    .populate("student")
    .populate("company")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCompanies = async (req, res) => {
  Company.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getStudents = async (req, res) => {
  Student.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getStudentsByCompany = async (req, res) => {
  try {
    const addedStudents = await Company.find(
      { _id: req.params.id },
      "students"
    ).populate("students.student");

    const addedStudentsids = addedStudents[0].students.map(
      (student) => student.student._id
    );

    const students = await Student.find({ _id: { $nin: addedStudentsids } });
    // console.log(addedStudentsids);

    res.status(200).json(students);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  // Student.find()
  //   .then(async (data) => {
  //     const addedStudents = await Company.find(
  //       { _id: req.params.id },
  //       "students"
  //     ).populate("students.student");
  //     console.log(addedStudents);
  //     const add = addedStudents[0].students;

  //     // const students = data.filter(
  //     //   (student) => !addedStudents[0].students?.student?.includes(student)
  //     // );

  //     const students = add.filter((student) => !data.includes(student.student));
  //     res.status(200).json(students);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
const getStudentResultById = async (req, res) => {
  Company.find({ _id: req.params.id })
    .populate("students.student")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getStudentById = async (req, res) => {
  Student.find({ _id: req.params.id })
    .populate("companies.company")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getResults,
  getCompanies,
  getStudents,
  getStudentResultById,
  getStudentById,
  getStudentsByCompany,
};
