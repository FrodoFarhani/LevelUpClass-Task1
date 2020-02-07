import logger from "../logger/logger";
import readline from "readline";

export class GetInputString {
	requestId = 0;
	exitMessage = "!exit";
	message = `Please enter your html code: 
> NOTE:PLEASE ENTER [ !exit ] after entering your input string to send your data to an endpoint
	
	`;
	constructor(requestId: number) {
		this.requestId = requestId;
	}

	public inputString = new Promise<string>((resolve, reject) => {
		let inputString = "";

		const readlineObject = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		try {
			readlineObject.question(this.message, (data: string) => {
				!this.checkExit(data) ? (inputString += data) : readlineObject.close();
			});
			readlineObject.on("line", (data: string) => {
				!this.checkExit(data)
					? (inputString += ` ${data}`)
					: readlineObject.close();
			});
			readlineObject.on("close", () => {
				logger.infoLog(this.requestId, inputString);
				resolve(inputString);
				readlineObject.close();
			});
		} catch (error) {
			logger.errorLog(this.requestId, error);
			reject(new Error(error));
			readlineObject.close();
		}
	});
	private checkExit(inputString: string): boolean {
		return inputString.toLowerCase() == this.exitMessage ? true : false;
	}
}
