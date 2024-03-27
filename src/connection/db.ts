import mongoose from "mongoose";
import Config from "../config/config";

const config = Config(process.env.NODE_ENV);
const dbOption = { autoIndex: true };

mongoose
	.connect(config.database_URI || "", dbOption)
	.then(() => console.log("** MongoDB Re-Connected successfully **"))
	.catch((err) => console.error("** MongoDB Re-Connection Failed **", err));

const db = mongoose.connection;

export default db;
