
<script>
    let dbData

    let{ data } = $props()

    async function request(sql) {
    const response = await fetch('/api', {
        method: 'POST',
        body: sql,
        headers: {
            'content-type': 'application/json'
        }
    });

    dbData = await response.json();

    console.log(dbData)
    }
    request(`SELECT * FROM [dbo].[vw_LocalAuthorityMetricsExportFull] WHERE 1`)


</script>
<h1>Testing a database connection</h1>
<br>
SUCCESS?: <b>{data.SUCCESS}</b><br>
QUERY: {data.QUERY}<br>
RESULT: {JSON.stringify(data.RESULT)}<br>

