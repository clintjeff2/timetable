const timetableGenerator = require("../timetable");
const Course = require("../models/courses.model");
const Timetable = require("../models/timetable.model");

exports.createTimetable = async (req, res, next) => {
  try {
    const courses = await Course.find();

    const timetable = new Timetable();

    await timetable.save();
    res.status(200).json({
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
      timetables: timetables,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, ...error });
  }
};
exports.getTimetable = async (req, res, next) => {
  console.log(req.params);
  try {
    const timetable = await Timetable.findById(req.params.id);
    console.log(timetable);

    res.status(200).json({
      timetable: timetable,
    });
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
