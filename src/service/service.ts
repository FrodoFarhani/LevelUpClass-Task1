import Logger from "../logger/logger";
import axios from "axios";
export class Service {
	private requestId: number;
	private options: any;
	constructor(requestId: number) {
		this.requestId = requestId;
		this.options = {
			baseURL: "https://jsonplaceholder.typicode.com",
			headers: { "Content-Type": "application/json" }
		};
	}

	async getData(url: string): Promise<JSON> {
		return await axios
			.get(url)
			.then((response: any) => Promise.resolve(response.data))
			.catch((error: any) => {
				this.handleError(this.requestId, error);
			});
	}

	async postData(inputText: string): Promise<JSON> {
		const data = this.createPostData(inputText);
		return axios
			.post("/posts", data, this.options)
			.then((response: any) => Promise.resolve(response.data))
			.catch((error: any) => {
				this.handleError(this.requestId, error);
			});
	}

	private handleError(id: number, error: any): Promise<any> {
		Logger.errorLog(id, error.message || error);
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
