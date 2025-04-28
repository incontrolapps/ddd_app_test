
import { json } from "@sveltejs/kit";
import { myQuery } from "$lib/db";

export async function GET({ url }) {

    let srch = url.searchParams
    let what = srch.get("what");
    let table = srch.get("table");
    let where = srch.get("where");
        console.log('what', what);
        console.log('table', table);
        console.log('where', where);

    let sql = `SELECT ${what} FROM [dbo].[${table}] WHERE ${where}`;

    try {
		const response = await myQuery(sql);
		console.log('response', response);
		if (response) {
			return json(response);
		}
	}
	catch (error) {
		console.error('Error executing SQL query:', error);
		return {query:sql, success:false, response:error};
	}

}
