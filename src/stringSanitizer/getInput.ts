const readline = require("readline");

const MESSAGE = `Please enter your html code: 
> NOTE:PLEASE ENTER CTRL+C after entering your input string
	
	`;
const FINAL_MESSAGE = `

******* Thank you! *******

	`;
export class GetInputString {
	public inputString = new Promise<string>(resolve => {
		let inputString = "";

		const readlineObject = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

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
}
