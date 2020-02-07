import { MockService } from "./../../__mocks__/mockService";

describe("Service", () => {
	test("Should POST resquest", async () => {
		const testData = {
			data: {
				userId: 1,
				id: 123,
				title: "test",
				body: "test text"
			},
			id: 101
		};
		const mockService = new MockService(testData);
		const data = await mockService.post();
		expect(data).toEqual(testData);
	});
});
