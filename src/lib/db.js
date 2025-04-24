
import sql from 'mssql';
import * as dotenv from 'dotenv';
import { env } from '$env/dynamic/private';

// const server = process.env.AZURE_SQL_SERVER;
// const database = process.env.AZURE_SQL_DATABASE;
// const port = +process.env.AZURE_SQL_PORT;
// const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;


// const noPasswordConfig = {
//   server,
//   port,
//   database,
//   authentication: {
//     type
//   },
//   options: {
//     encrypt: true
//   }
// };

// let testQuery = `SELECT TimePeriod, Value FROM [dbo].[vw_LocalAuthorityMetricsExportFull] 
// WHERE ONSCode = 'FA001'
// AND MetricCode = 'FM001'`

// export const myQuery = async () => {

//     var poolConnection = await sql.connect(noPasswordConfig);
//     const result = await poolConnection.request().query(testQuery);
//     poolConnection.close();
//     return `Result: ${JSON.stringify(result)}`;
//   };

export const myQuery =  () => JSON.stringify(env);