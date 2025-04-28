<script>
	let { data } = $props();
</script>

<h1>Testing a database connection</h1>
<br />
SUCCESS?: <b>{data.SUCCESS}</b><br />
QUERY: {data.QUERY}<br />
RESULT: {JSON.stringify(data.RESULT)}<br />

<a href="/test">Test again</a>
