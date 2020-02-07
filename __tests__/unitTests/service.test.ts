import { MockService } from "./../../__mocks__/mockService";

describe("Service", () => {
	test("Should POST resquest", async () => {
		const testInput = "test text";
		const testData = {
			data: {
				userId: 1,
				id: 123,
				title: "test",
				body: "test text"
			},
			id: 101
		};
		const mockService = new MockService(testInput);
		const data = await mockService.post();
		expect(data).toEqual(testData);
	});
});
