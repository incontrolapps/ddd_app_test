 import { myQuery } from "$lib/db";
import { json } from '@sveltejs/kit';

 export async function POST({ request }) {
        const {sql} = await request.json()

    try {
        const response = await myQuery(sql);
        console.log('response', response);
        if (response) {
            return json({query:sql, success:true, response:response});
        }
    }
    catch (error) {
        console.error('Error executing SQL query:', error);
        return json({query:sql, success:false, response:error});
    }

    return json({
        success: false,
        message: 'Error executing SQL query',
        request: sql,
    })
}
