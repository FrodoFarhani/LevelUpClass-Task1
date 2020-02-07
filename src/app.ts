import { GetInputString } from "./stringSanitizer/getInput";
import { Sanitizer } from "./stringSanitizer/sanitizer";
import { Service } from "./service/service";
import logger from "./logger/logger";

const App = async (): Promise<void> => {
	const requestId = Math.floor(Math.random() * Math.floor(1000));
	try {
		const getInputString = await new GetInputString(requestId).inputString;
		const sanitizedInput = new Sanitizer(getInputString, requestId).sanitize();

		const result = await new Service(requestId).postData(sanitizedInput);

		console.log("\n\n Your sanitized input that post to input:\n", result);
	} catch (error) {
		logger.errorLog(requestId, error);
		console.log(
			"\n\n *** OOPS! Something wrong, please follow up your issue with this ID:\n",
			requestId
		);
	}
};

App();
