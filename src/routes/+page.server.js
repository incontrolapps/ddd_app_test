import { myQuery } from "$lib/db";
import { json } from '@sveltejs/kit';

export async function load() {
	const response = await myQuery();

	if (response) {
		return response;
	}

	return {'Not working': 'Nope'};
}
