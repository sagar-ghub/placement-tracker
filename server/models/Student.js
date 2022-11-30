const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  email: String,
  registrationNo: Number,

  phone: String,
  address: String,
  companies: [
    {
      company: { type: Schema.Types.ObjectId, ref: "Company" },
      status: Number,
    },
  ],
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
