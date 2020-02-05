"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const MESSAGE = `Please enter your html code: 
> NOTE:PLEASE ENTER CTRL+C after entering your input string
	
	`;
const FINAL_MESSAGE = `

******* Thank you! *******

	`;
class GetInputString {
	constructor() {
		this.inputString = new Promise(resolve => {
			let inputString = "";
			const readlineObject = readline.createInterface({
				input: process.stdin,
				output: process.stdout
			});
			readlineObject.question(MESSAGE, data => {
				inputString += data;
			});
			readlineObject.on("line", data => {
				inputString += "\r\n";
				inputString += data;
			});
			readlineObject.on("close", () => {
				console.log(FINAL_MESSAGE);
				resolve(inputString);
				readlineObject.close();
			});
		});
	}
}
exports.GetInputString = GetInputString;
//# sourceMappingURL=getInput.js.map
