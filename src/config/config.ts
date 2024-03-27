import * as dotenv from "dotenv";

export default (env) => {
	const ENV_VARS = dotenv.config();

	const envVars = {
		database_URI: process.env.MONGO_URL,
		port: process.env.PORT,
		jwt_secret: process.env.JWT_SECRET,
		kc_client: process.env.KC_CLIENT_ID,
		kc_realm: process.env.KC_REALM,
		kc_base_url: process.env.KC_BASE_URL,
	};
	return envVars;
};
