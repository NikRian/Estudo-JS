const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
	"mongodb+srv://Admin:123senha123@cluster0.mtycy.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(routes);

app.listen(3333);
