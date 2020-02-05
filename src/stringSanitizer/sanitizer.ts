const remark = require("remark");
const strip = require("strip-markdown");
import logger from "../logger/logger";
/**
 * strip-markdown has ann issue with strings that starts with html tag, so we add "."
 * to the input then slice it befor return.
 */

export class Sanitizer {
	private inputString: string;
	private requestId: number;

	constructor(inputString: string, requestId: number) {
		this.inputString = inputString;
		this.requestId = requestId;
	}
	sanitize(): string {
		let result = "";
		remark()
			.use(strip)
			.process(
				`.${this.inputString}`,
				(error: Error, file: Record<string, any>) => {
					if (error) {
						logger.errorLog(this.requestId, `${error}`);
						throw error;
					} else {
						result = String(file)
							.substr(1)
							.trim();
						logger.infoLog(this.requestId, result);
					}
				}
			);
		return result;
	}
}
