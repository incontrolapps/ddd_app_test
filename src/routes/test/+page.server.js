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
	try {
		const response = await myQuery(sql);
		console.log('response', response);
		if (response) {
			return {query:sql, success:true, response:response};
		}
	}
	catch (error) {
		console.error('Error executing SQL query:', error);
		return {query:sql, success:false, response:error};
	}

	}
};
