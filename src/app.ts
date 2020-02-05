//import { GetInputString } from "./stringSanitizer/getInput";
import { Sanitizer } from "./stringSanitizer/sanitizer";
//import logger from "./logger/logger";

const requestId = Math.floor(Math.random() * Math.floor(1000));

const test = async (): Promise<void> => {
	//const t = new GetInputString(requestId);
	//const result = await t.inputString;

	const res = new Sanitizer(
		"<p>test string</p><h1>test dfd</h1>",
		requestId
	).sanitize();
	console.log("res:", res);
	//return result2;
};
test();
