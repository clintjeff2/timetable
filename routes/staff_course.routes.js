const express = require('express');
const {
	createCourseStaff,
	getAllCourseStaff,
	updateCourseStaff,
	deleteCourseStaff,
} = require('./../controllers/staff_course.controller');

const router = express.Router();

router.route('/').post(createCourseStaff).get(getAllCourseStaff);

router.route('/:id').patch(updateCourseStaff).delete(deleteCourseStaff);

module.exports = router;
