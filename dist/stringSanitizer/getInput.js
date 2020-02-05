"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger/logger"));
const readline_1 = __importDefault(require("readline"));
const MESSAGE = `Please enter your html code: 
> NOTE:PLEASE ENTER CTRL+C after entering your input string
	
	`;
class GetInputString {
	constructor(requestId) {
		this.requestId = 0;
		this.inputString = new Promise((resolve, reject) => {
			let inputString = "";
			const readlineObject = readline_1.default.createInterface({
				input: process.stdin,
				output: process.stdout
			});
			try {
				readlineObject.question(MESSAGE, data => {
					inputString += data;
				});
				readlineObject.on("line", data => {
					inputString += ` ${data}`;
				});
				readlineObject.on("close", () => {
					logger_1.default.infoLog(this.requestId, inputString);
					resolve(inputString);
					readlineObject.close();
				});
			} catch (error) {
				logger_1.default.errorLog(this.requestId, error);
				reject(new Error(error));
				readlineObject.close();
			}
		});
		this.requestId = requestId;
	}
}
exports.GetInputString = GetInputString;
//# sourceMappingURL=getInput.js.map
