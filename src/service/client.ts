import axios from "axios";

export default () => {
	const options = {
		baseURL: "https://jsonplaceholder.typicode.com",
		headers: { "Content-Type": "application/json" }
	};
	return axios.create(options);
};
