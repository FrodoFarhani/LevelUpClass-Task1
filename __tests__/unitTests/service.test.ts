import { MockService } from "./../../__mocks__/mockService";

xdescribe("Service", () => {
	test("Should POST resquest", async () => {
		const testInput = "test text";

		const mockService = new MockService(testInput);
		const result = await mockService.post();

		expect(result.data).toEqual(testInput);
		expect(result.mockAxios).toHaveBeenCalledTimes(1);
	});
	test("Should reject POST resquest", async () => {
		const testInput = "test text";
		const mockService = new MockService(testInput);

		try {
			await mockService.rejectPost();
		} catch (error) {
			expect(error).toBe("Failed to call API!");
		}
	});
});
