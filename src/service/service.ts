//import client from "./client";
import Logger from "../logger/logger";
import axios from "axios";
export class Service {
	private requestId: number;
	private result = "";
	private client: any;

	constructor(requestId: number) {
		this.requestId = requestId;
		const options = {
			baseURL: "https://jsonplaceholder.typicode.com",
			headers: { "Content-Type": "application/json" }
		};
		this.client = axios.create(options);
	}

	async getData(url: string): Promise<JSON> {
		return await axios
			.get(url)
			.then((response: any) => (this.result = response.data))
			.catch(this.handleError)
			.finally(() => {
				Promise.resolve(this.result);
			});
	}

	async postData(url: string, inputText: any): Promise<JSON> {
		const data = this.createPostData(inputText);
		return this.client
			.post(url, data)
			.then((response: any) => (this.result = response.data))
			.catch(this.handleError)
			.finally(() => {
				console.log("post data");

				Promise.resolve(this.result);
			});
	}

	private handleError(error: any): Promise<any> {
		console.log(error.statusMessage);
		console.log("in Error");
		console.log("reqId", this.requestId);

		Logger.errorLog(this.requestId, error.statusMessage);
		return Promise.reject(error.message || error);
	}
	private createPostData(inputText: string) {
		return {
			userId: this.requestId,
			id: this.requestId,
			title: "Sanitizer",
			body: inputText
		};
	}
}
