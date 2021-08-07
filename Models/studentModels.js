const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const studentSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Email: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  }
});
module.exports = mongoose.model("Student", studentSchema);
