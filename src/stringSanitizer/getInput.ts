const readline = require("readline");

const MESSAGE =
	"\r\n************ PLEASE ENTER CTRL+C after entering your input string ************\r\nPlease enter your html code:\r\n";
const FINAL_MESSAGE = "\r\nPlease enter your html code:\r\n";
export class getInputString {
	async inputString(): Promise<any>  {
		
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
			});

		const promise = new Promise(resolve => {
			let inputString: string='';
			
			rl.question(MESSAGE, (recievedString: string) => {
				inputString += recievedString;
			});
			rl.on("line", (recievedString: string) => {
				inputString += "\r\n";
				inputString += recievedString;
			});
			rl.on("close", () => {
				console.log(FINAL_MESSAGE);
				resolve(inputString);
				rl.close();
			});
		});

		return promise.then(recievedString => {
			return recievedString;
		});
 
	}
}

