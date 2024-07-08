const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A course must have a name'],
	},
	course_code: {
		type: String,
		unique: true,
		required: [true, 'A course must have a course_code'],
	},
	specialties: {
		type: [String],
		required: [
			true,
			'Courses must be attributed to specialties that offer them',
		],
	},
	total_hours: {
		type: Number,
		required: [true, "A course has a length duration in which it'll be taught"],
	},
	hours_weekly: {
		type: Number,
		required: [
			true,
			"A course has a length duration in which it'll be taught per week",
		],
	},
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
