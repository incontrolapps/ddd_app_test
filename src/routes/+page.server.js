import { myQuery } from "$lib/db";


export async function load() {
	const response = await myQuery();
	const queryFunc = myQuery

	if (response) {
		return {response:response, qf:queryFunc};
	}

	return {'Not working': 'Nope'};
}