import data from "./data.json";

let apiResponse = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(data);
	}, 300);
});

export default apiResponse;
