const readline = require("readline");

const MESSAGE = `
	Please enter your html code:
	* NOTE: PLEASE ENTER CTRL+C after entering your input string
	
	`;
const FINAL_MESSAGE = `
	Please enter your html code:
	`;
export class GetInputString {
	public inputString = async (): Promise<string> => {
		let inputString = "";

		const readlineObject = readline.createInterface({
			input: process.stdin
		});

		readlineObject.question(MESSAGE);
		readlineObject.on("line", (data: string) => {
			inputString += "\r\n";
			inputString += data;
		});
		readlineObject.on("close", () => {
			console.log(FINAL_MESSAGE);
			readlineObject.close();
		});

		return inputString;
	};
}
