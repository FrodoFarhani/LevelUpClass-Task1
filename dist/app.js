"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { GetInputString } from "./stringSanitizer/getInput";
const sanitizer_1 = require("./stringSanitizer/sanitizer");
//import logger from "./logger/logger";
const requestId = Math.floor(Math.random() * Math.floor(1000));
const test = async () => {
	//const t = new GetInputString(requestId);
	//const result = await t.inputString;
	const res = new sanitizer_1.Sanitizer(
		"<p>test string</p><h1>test dfd</h1>",
		requestId
	).sanitize();
	console.log("res:", res);
	//return result2;
};
test();
//# sourceMappingURL=app.js.map
