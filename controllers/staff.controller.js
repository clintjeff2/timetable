const Staff = require("../models/staff.model");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // fs.mkdir('pictures', (err) => {
    // 	console.log('An Error occured', err);
    // });
    cb(null, "pictures");
  },
  filename: (req, file, cb) => {
    console.log("REQ", req.body, "FILE", file);

    if (file.mimetype.split("/")[0] !== "image") {
      cb(new Error("Incorrect file type, file was not an image"));
    } else {
      cb(null, `${req.body.matricule}_${req.body.name}.png`);
    }
    req.body.photo = `${req.body.matricule}_${req.body.name}.png`;
  },
});

const upload = multer({ storage });
exports.uploadStaffPic = upload.single("photo");

exports.createStaff = async (req, res, next) => {
  try {
    const staffData = { ...req.body };
    const staff = await Staff.create(staffData);

    res.status(201).json(staff);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message, ...err });
  }
};

exports.getAllStaff = async (req, res, next) => {
  try {
    const staffs = await Staff.find({});

    res.status(200).json(staffs);
  } catch (err) {
    res.status(500).json({ message: err.message, ...err });
  }
};

exports.updateStaff = async (req, res, next) => {
  try {
    const id = req.params.id;
    const staffData = { ...req.body };
    const staff = await Staff.findByIdAndUpdate(req.params.id, staffData, {
      returnOriginal: false,
      runValidators: true,
    });

    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message, ...err });
  }
};

exports.deleteStaff = async (req, res, next) => {
  try {
    const id = req.params.id;
    const staff = await Staff.findByIdAndDelete(req.params.id);

    res.status(204).json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message, ...err });
  }
};
