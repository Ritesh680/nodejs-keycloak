import db from "./connection/db";
import Config from "./config/config";
const http = require("http");
const express = require("express");

const config = Config(process.env.NODE_ENV);

const app = express();
app.use(express.urlencoded({ extended: false }));

var cors = require("cors");
app.use(cors());

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log(" ");
	console.log("------> +++++ COnnected MongoDB server +++++ <------");
	console.log(" ");

	app.use("/", require("./routes"));

	const server = http.createServer(app);

	server.listen(config.port || 8080, () => {
		console.log("Server listening on port " + config.port);
	});
});
