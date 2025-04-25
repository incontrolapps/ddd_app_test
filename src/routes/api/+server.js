import { myQuery } from "$lib/db";
import { json } from '@sveltejs/kit';


export async function POST({ request }) {
    const response = await myQuery(request.body);

    if (response) {
        return response;
    }

    return {'Not working': 'Nope'};
}