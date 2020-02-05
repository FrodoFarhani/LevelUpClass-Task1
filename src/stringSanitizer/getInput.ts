import logger from "../logger/logger";
import readline from "readline";

const MESSAGE = `Please enter your html code: 
> NOTE:PLEASE ENTER CTRL+C after entering your input string
	
	`;
export class GetInputString {
	requestId = 0;
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
			readlineObject.question(MESSAGE, (data: string) => {
				inputString += data;
			});
			readlineObject.on("line", (data: string) => {
				inputString += ` ${data}`;
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
}
