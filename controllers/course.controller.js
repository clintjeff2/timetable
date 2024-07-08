const Course = require('./../models/courses.model');

exports.createCourse = async (req, res, next) => {
	try {
		const data = { ...req.body };
		// const course = await Course.create(data);
		let course = new Course(data);
		course = await course.save();

		res.status(201).json(course);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};

exports.getAllCourses = async (req, res, next) => {
	try {
		let course = await Course.find({});

		res.status(200).json(course);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};

exports.updateCourse = async (req, res, next) => {
	try {
		const id = req.params.id;
		let course = await Course.findByIdAndUpdate(
			id,
			{ ...req.body },
			{ runValidators: true, new: true }
		);

		res.status(200).json(course);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};

exports.deleteCourse = async (req, res, next) => {
	try {
		const id = req.params.id;
		let course = await Course.findByIdAndDelete(id);

		res.status(204).json(course);
	} catch (err) {
		res.status(500).json({ message: err.message, ...err });
	}
};
