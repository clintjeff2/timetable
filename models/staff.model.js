const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A staff member must have a name'],
	},
	matricule: {
		type: String,
		unique: true,
		required: [true, 'A staff member must have a matricule'],
	},
	photo: {
		type: String,
		required: [true, 'A staff member must have a photo'],
	},
	email: {
		type: String,
		unique: true,
		required: [true, 'A staff member must have an email'],
	},
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
