import { Service } from "../src/service/service";
import axios from "axios";
jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

export class MockService {
	testData: string;
	constructor(testData: string) {
		this.testData = testData;
	}
	async post() {
		const URL = "/posts";
		const response = { data: this.testData };
		mockAxios.post.mockResolvedValue(response);

		const data = await new Service(1).postData(this.testData);
		return data;
	}
}
