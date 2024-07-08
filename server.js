const app = require('./app');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/timetable';
const URL_DEPLOY =
	'mongodb+srv://jeff:o1Uf0knhi9bPLpZp@cluster0.b7wyaaw.mongodb.net/timetable?retryWrites=true&w=majority&appName=Cluster0';
mongoose
	.connect(URL_DEPLOY, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to Database with success!!'))
	.catch(() => console.log('Failed connecting to database.'));

app.listen(4000, () => {
	console.log('Server Started Successfully, running on port 4000');
});
