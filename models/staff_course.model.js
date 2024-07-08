const mongoose = require('mongoose');

const courseStaffSchema = new mongoose.Schema({
	course: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Course',
		required: [true, 'A course must have a course'],
	},
	staff: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Staff',
		required: [true, 'A course must have a staff'],
	},
});

const CourseStaff = mongoose.model('CourseStaff', courseStaffSchema);

module.exports = CourseStaff;
