const readline = require("readline");

const MESSAGE =
	"\r\n************ PLEASE ENTER CTRL+C after entering your input string ************\r\nPlease enter your html code:\r\n";
const FINAL_MESSAGE = "\r\nPlease enter your html code:\r\n";
export class GetInputString {
	async inputString(): Promise<string>  {
		
		const readlineObject = readline.createInterface({
			input: process.stdin,
			output: process.stdout
			});

		const promise = new Promise<string>(resolve => {
			let inputString='';
			
			readlineObject.question(MESSAGE, (data: string) => {
				inputString += data;
			});
			readlineObject.on("line", (data: string) => {
				inputString += "\r\n";
				inputString += data;
			});
			readlineObject.on("close", () => {
				console.log(FINAL_MESSAGE);
				resolve(inputString);
				readlineObject.close();
			});
		});

		const userInput: Promise<string>= promise.then((data: string) => {
			return data;
		});

		return userInput;
	}
}

