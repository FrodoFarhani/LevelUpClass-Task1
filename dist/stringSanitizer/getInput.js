"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const MESSAGE = `
	Please enter your html code:
	* NOTE: PLEASE ENTER CTRL+C after entering your input string
	
	`;
const FINAL_MESSAGE = `
	Please enter your html code:
	`;
class GetInputString {
	async inputString() {
		let inputString = "";
		const readlineObject = readline.createInterface({
			input: process.stdin
		});
		readlineObject.question(MESSAGE);
		readlineObject.on("line", data => {
			inputString += "\r\n";
			inputString += data;
		});
		readlineObject.on("close", () => {
			console.log(FINAL_MESSAGE);
			readlineObject.close();
		});
		return inputString;
	}
}
exports.GetInputString = GetInputString;
//# sourceMappingURL=getInput.js.map
