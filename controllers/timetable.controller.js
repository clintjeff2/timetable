const timetableGenerator = require("../timetable");
const Course = require("../models/courses.model");
const Timetable = require("../models/timetable.model");

exports.createTimetable = async (req, res, next) => {
  try {
    const timetable = new Timetable();

    await timetable.save();
    res.status(200).json({
      status: "Timetable created successfully",
      timetable: timetable.timetable,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, ...error });
  }
};

exports.getAllTimetables = async (req, res, next) => {
  try {
    const timetables = await Timetable.find();

    res.status(200).json({
      status: "success",
      message: "Successfully accessed",
      timetables: timetables,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, ...error });
  }
};
exports.getTimetable = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, ...error });
  }
};
exports.updateTimetable = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, ...error });
  }
};
exports.deleteTimetable = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, ...error });
  }
};
