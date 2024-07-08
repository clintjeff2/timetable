const express = require('express');
const staffRouter = require('./routes/staff.routes');
const courseRouter = require('./routes/course.routes');
const courseStaffRouter = require('./routes/staff_course.routes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded());
app.use(cors(''));

app.use('/timetable-ai/staff', staffRouter);
app.use('/timetable-ai/course', courseRouter);
app.use('/timetable-ai/course_staff', courseStaffRouter);

app.use((err, req, res, next) => {
	//General error handling in nodejs app
	console.log('This is where all errors would be handle.');
	console.log(err);
});

app.use('*', (req, res, next) => {
	res
		.status(500)
		.json({ message: `Could not find ${req.originalUrl} on this server` });
});
module.exports = app;
