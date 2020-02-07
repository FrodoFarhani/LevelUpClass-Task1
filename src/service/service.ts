import Logger from "../logger/logger";
import axios from "axios";
export class Service {
	private requestId: number;
	private result = "";
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
			.then((response: any) => (this.result = response.data))
			.catch((error: any) => {
				this.handleError(this.requestId, error);
			})
			.finally(() => {
				Promise.resolve(this.result);
			});
	}

	async postData(inputText: string): Promise<JSON> {
		const data = this.createPostData(inputText);
		return axios
			.post("/post", data, this.options)
			.then((response: any) => (this.result = response.data))
			.catch((error: any) => {
				this.handleError(this.requestId, error);
			})
			.finally(() => {
				Promise.resolve(this.result);
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
