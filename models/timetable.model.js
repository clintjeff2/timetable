const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  courses: [mongoose.Schema.Types.ObjectId],
  timeSlots: [{}],
  daysOfWeek: [String],
  startDate: Date,
  periodDays: Number,
});

const Timetable = mongoose.model("Timetable", Timetable);

module.exports = Timetable;
