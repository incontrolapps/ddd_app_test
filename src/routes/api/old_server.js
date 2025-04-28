import { page } from '$app/stores';
import { json } from '@sveltejs/kit';

let output = null
//http://localhost:5173/api?what=*&table=vw_LocalAuthorityMetricsExportFull&where=ONSCode%20=%20%27FA001%27%20AND%20MetricCode%20=%20%27FM001%27


let urlParams = {};


for (const p of $page.url.searchParams) {
urlParams[p[0]] = p[1];
}

let sql = `SELECT ${urlParams.what} FROM [dbo].[${urlParams.table}] WHERE ${urlParams.where}`;
console.log(sql);
if (urlParams.what) {
fetch("api/query", {
method: "POST",
body: JSON.stringify({ sql }),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then((response) => response.json())
.then((jason)=> json(jason));
}


