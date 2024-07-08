const CourseStaff = require('../models/staff_course.model');

exports.createCourseStaff = async (req, res, next) => {
	try {
		const data = { ...req.body };
		// const course = await Course.create(data);
		let courseStaff = new CourseStaff(data);
		courseStaff = await courseStaff.save();

		res.status(201).json(courseStaff);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};

exports.getAllCourseStaff = async (req, res, next) => {
	try {
		let courseStaff = await CourseStaff.find({});

		res.status(200).json(courseStaff);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};

exports.updateCourseStaff = async (req, res, next) => {
	try {
		const id = req.params.id;
		let courseStaff = await CourseStaff.findByIdAndUpdate(
			id,
			{ ...req.body },
			{ runValidators: true, new: true }
		);

		res.status(200).json(courseStaff);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};

exports.deleteCourseStaff = async (req, res, next) => {
	try {
		const id = req.params.id;
		let courseStaff = await CourseStaff.findByIdAndDelete(id);

		res.status(204).json(courseStaff);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};
