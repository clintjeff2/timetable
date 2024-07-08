const app = require('./app');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/timetable';
const URL_DEPLOY =
	'mongodb+srv://jeffyouashi:F1mpKo0uUhG5hnD8@cluster0.tx66e35.mongodb.net/timetable';
mongoose
	.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to Database with success!!'))
	.catch(() => console.log('Failed connecting to database.', err));

app.listen(4000, () => {
	console.log('Server Started Successfully, running on port 4000');
});
