import { GetInputString } from "./stringSanitizer/getInput";
import logger from "./logger/logger";

const requestId = Math.floor(Math.random() * Math.floor(1000));

const test = async (): Promise<string> => {
	const t = new GetInputString(requestId);
	const result = await t.inputString;

	console.log(result);
	return result;
};
test();
logger.errorLog(requestId, "err log");
logger.infoLog(requestId, "req log");
process.exit();
