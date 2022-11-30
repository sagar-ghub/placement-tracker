const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String,
  website: String,
  ctc: String,
  vacancies: Number,

  students: [
    {
      student: { type: Schema.Types.ObjectId, ref: "Student" },
      status: Number,
    },
  ],
});

const CompanyModel = mongoose.model("Company", CompanySchema);

module.exports = CompanyModel;
