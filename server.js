const app = require('./app');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/timetable';

mongoose
	.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to Database with success!!'))
	.catch(() => console.log('Failed connecting to database.'));

app.listen(4000, () => {
	console.log('Server Started Successfully, running on port 4000');
});
