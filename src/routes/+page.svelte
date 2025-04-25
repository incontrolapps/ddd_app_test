
<script>

let { data } = $props();
console.log('data', data);
//{SUCCESS: "YEAH !", QUERY: testQuery, RESULT: resultSet.recordset}
</script>
<h1>Testing a database connection</h1>
<br>
SUCCESS?: <b>{data.SUCCESS}</b><br>
QUERY: {data.QUERY}<br>
RESULT: {JSON.stringify(data.RESULT)}<br>

