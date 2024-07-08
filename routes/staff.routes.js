const express = require('express');
const {
	createStaff,
	getAllStaff,
	uploadStaffPic,
	updateStaff,
	deleteStaff,
} = require('./../controllers/staff.controller');

const router = express.Router();

router.route('/').get(getAllStaff).post(uploadStaffPic, createStaff);

router.route('/:id').patch(updateStaff).delete(deleteStaff);

module.exports = router;
