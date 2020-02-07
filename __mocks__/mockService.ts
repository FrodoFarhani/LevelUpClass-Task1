import { Service } from "../src/service/service";
import axios from "axios";
jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

export class MockService {
	testData: object;
	constructor(testData: object) {
		this.testData = testData;
	}
	async post() {
		const URL = "/posts";
		const response = { data: this.testData };
		mockAxios.post.mockResolvedValue(response);

		const data = await new Service(1).postData(URL, this.testData);
		return data;
	}
}
