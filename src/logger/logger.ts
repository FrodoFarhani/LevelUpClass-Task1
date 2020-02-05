const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;

class Logger {
	errorLog(id: number, message: string): void {
		const logger = createLogger({
			format: combine(timestamp(), prettyPrint(), format.json()),
			exceptionHandlers: [
				new transports.File({
					filename: "./logs/exceptions.log"
				})
			],
			transports: [
				new transports.File({
					name: "error-file",
					level: "error",
					filename: "./logs/error-logs.log",
					json: true,
					maxsize: 5242880, //5MB
					maxFiles: 5,
					colorized: true
				})
			],
			exitOnError: false,
			message: message
		});
		logger.error({ message: message, id: id });
	}
	infoLog(id: number, message: string): void {
		const logger = createLogger({
			format: combine(timestamp(), prettyPrint(), format.json()),
			exceptionHandlers: [
				new transports.File({
					filename: "./logs/exceptions.log"
				})
			],
			transports: [
				new transports.File({
					name: "info-file",
					level: "info",
					filename: "./logs/info-logs.log",
					json: true,
					maxsize: 5242880, //5MB
					maxFiles: 5,
					colorized: true
				})
			],
			exitOnError: false,
			message: message
		});
		logger.info({ message: message, id: id });
	}
	resultLog(id: number, message: string): void {
		const logger = createLogger({
			format: combine(timestamp(), prettyPrint(), format.json()),
			exceptionHandlers: [
				new transports.File({
					filename: "./logs/exceptions.log"
				})
			],
			transports: [
				new transports.File({
					name: "result-file",
					level: "info",
					filename: "./logs/result-logs.log",
					json: true,
					maxsize: 5242880, //5MB
					maxFiles: 5,
					colorized: true
				})
			],
			exitOnError: false,
			message: message
		});
		logger.info({ message: message, id: id });
	}
}
export default new Logger();
