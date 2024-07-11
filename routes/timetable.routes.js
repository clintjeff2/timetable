const express = require("express");

const router = express.Router();

// router.route('/').get(getAllStaff).post(uploadStaffPic, createStaff);
router.route("/").get().post();

router.route("/:id").patch().delete();

module.exports = router;
