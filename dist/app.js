"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const getInput_1 = require("./stringSanitizer/getInput");
const logger_1 = __importDefault(require("./logger/logger"));
const requestId = Math.floor(Math.random() * Math.floor(1000));
const test = async () => {
	const t = new getInput_1.GetInputString(requestId);
	const result = await t.inputString;
	console.log(result);
	return result;
};
test();
logger_1.default.errorLog(requestId, "err log");
logger_1.default.infoLog(requestId, "req log");
//# sourceMappingURL=app.js.map
