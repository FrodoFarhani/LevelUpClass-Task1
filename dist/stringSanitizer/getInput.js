"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger/logger"));
const readline_1 = __importDefault(require("readline"));
class GetInputString {
	constructor(requestId) {
		this.requestId = 0;
		this.exitMessage = "!exit";
		this.message = `Please enter your html code: 
> NOTE:PLEASE ENTER [ !exit ] after entering your input string to send your data to an endpoint
	
	`;
		this.inputString = new Promise((resolve, reject) => {
			let inputString = "";
			const readlineObject = readline_1.default.createInterface({
				input: process.stdin,
				output: process.stdout
			});
			try {
				readlineObject.question(this.message, data => {
					!this.checkExit(data)
						? (inputString += data)
						: readlineObject.close();
				});
				readlineObject.on("line", data => {
					!this.checkExit(data)
						? (inputString += ` ${data}`)
						: readlineObject.close();
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
	checkExit(inputString) {
		return inputString.toLowerCase() == this.exitMessage ? true : false;
	}
}
exports.GetInputString = GetInputString;
//# sourceMappingURL=getInput.js.map
