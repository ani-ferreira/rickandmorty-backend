const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

//Connect to DB
mongoose.connect(process.env.DBCONNECTION);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Import route
//Posts
app.use("/favourites", require("./routes/favourites"));

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
