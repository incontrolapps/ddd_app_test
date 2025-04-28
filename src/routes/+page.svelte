<script>
	let { data } = $props();
    console.log(data);
    let exampleCode = `    import { myQuery } from "$lib/db";<br>
    export async function load() {<br>
        &ensp;const request = await fetch("http://85.210.161.184/api?what=*&table=vw_LocalAuthorityMetricsExportFull&where=ONSCode = 'FA001' AND MetricCode = 'FM001'");<br>
        &ensp;return response;<br>
    &ensp;}`
</script>

<h1>This is Tim's data API test app</h1>
<br />
<h2>Test Objectives</h2>
<p>
	The primary objective is to fetch data via an API linked to the data Engineers' database hosted on
	Azure. This is so that frontend developers can fetch data while working on localhost, hydrate content on the page with that
	data, and create live prototypes
</p>

<h2>Example code</h2>
<code>
{@html exampleCode}
</code><br><h2>Example generated SQL query</h2>
<p> <i>SELECT * FROM [dbo].[vw_LocalAuthorityMetricsExportFull] WHERE ONSCode = 'FA001' AND MetricCode = 'FM001'</i></p>
<h2>Response to SQL query (tabulated with Svelte each statements)</h2>
{#if data}
<table>
    <caption>Example data in a table</caption>
<thead>
<tr>
    {#each Object.keys(data.RESULT[0]) as key}
    <th>{key}</th>
{/each}
</tr>
</thead>
<tbody>
    {#each data.RESULT as row}
        <tr>
            {#each Object.keys(row) as key}
                <td>{row[key]}</td>
            {/each}
        </tr>
    {/each}
</tbody>
</table>
{/if}

<style>
    table {
  border-collapse: collapse;
  width: max(65rem, 100%);
  table-layout: fixed;
}

th,
caption {
  text-align: start;
}

caption {
  margin-block: 0.75rem;
}

thead th:not(:first-child),
td {
  text-align: end;
}

thead {
  border-block-end: 2px solid;
  background: whitesmoke;
}

tfoot {
  border-block: 2px solid;
  background: whitesmoke;
}

th,
td {
  border: 1px solid lightgrey;
  padding: 0.25rem 0.75rem;
  vertical-align: baseline;
}

th:first-child {
  position: sticky;
  inset-inline-start: 0;
  border-inline-end: none;
}

tbody th {
  background: white;
}

thead th,
tfoot th {
  background: whitesmoke;
}

thead th {
  vertical-align: bottom;
}

td:first-of-type,
:where(thead, tfoot) th:nth-child(2) {
  border-inline-start: none;
}

th:first-of-type {
  width: 10rem;
}

th:first-child::after {
  content: '';
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  width: 1px;
  height: 100%;
  background: lightgrey;
}


</style>