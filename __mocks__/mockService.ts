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
		const response = { data: this.testData };
		mockAxios.post.mockResolvedValue(response);

		const data = await new Service(1).postData(this.testData);
		return { mockAxios: mockAxios.post, data };
	}
	async rejectPost() {
		const response = { data: this.testData };
		mockAxios.post.mockRejectedValue(response);
		try {
			await new Service(1).postData(this.testData);
		} catch (error) {
			throw "Failed to call API!";
		}
	}
}
