"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const getInput_1 = require("./stringSanitizer/getInput");
const sanitizer_1 = require("./stringSanitizer/sanitizer");
const service_1 = require("./service/service");
const logger_1 = __importDefault(require("./logger/logger"));
const App = async () => {
	const URL = "/posts";
	const requestId = Math.floor(Math.random() * Math.floor(1000));
	try {
		const getInputString = await new getInput_1.GetInputString(requestId)
			.inputString;
		const sanitizedInput = new sanitizer_1.Sanitizer(
			getInputString,
			requestId
		).sanitize();
		const result = await new service_1.Service(requestId).postData(
			URL,
			sanitizedInput
		);
		console.log("\n\n Your sanitized input that post to input:\n", result);
	} catch (error) {
		logger_1.default.errorLog(requestId, error);
		console.log(
			"\n\n *** OOPS! Something wrong, please follow up your issue with this ID:\n",
			requestId
		);
	}
};
App();
//# sourceMappingURL=app.js.map
