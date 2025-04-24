import { myQuery } from "$lib/db";


export async function load() {
	const response = await myQuery();

	if (response) {
		return {data: response};
	}

	return 'Not working';
}