const app = require("./app");
const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/timetable";
const URL_DEPLOY =
  "mongodb+srv://vanessafuangi:mfSqtb9jGNN61ZcU@cluster0.kuc3nxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(URL_DEPLOY)
  .then(() => console.log("Connected to Database with success!!"))
  .catch((err) => console.log("Failed connecting to database.", err));

app.listen(4000, () => {
  console.log("Server Started Successfully, running on port 4000");
});
