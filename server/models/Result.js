const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: "Student" },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  round: { type: Number, default: -1 },
  // 0 - Applied
  // 1 - Written Test
  // 2 - Technical Interview
  // 3 - HR Interview
  // 4 - Offer
  remarks: String,
});

const ResultModel = mongoose.model("Result", ResultSchema);

module.exports = ResultModel;
