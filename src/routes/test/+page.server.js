// import { myQuery } from "$lib/db";
// import { json } from '@sveltejs/kit';


// export async function POST({ request }) {
//     const response = await myQuery(request.body);

//     if (response) {
//         return response;
//     }

//     return {'Not working': 'Nope'};
export const actions = {
	default: async ({request}) => {
		const data = await request.formData();
		console.log('data', data);
		const sql = data.get('sql');
		console.log('sql', sql);
	//	const response = await myQuery(request.body);
	const response = await myQuery(sql);

	if (response) {
		return {query:sql, success:false, response:response};
	}

	return { query: sql, success: false, response: {alas: 'Nope'} };
	}
};
