
import sql from 'mssql';
import * as dotenv from 'dotenv';
import { env } from '$env/dynamic/private';

const server = env.AZURE_SQL_SERVER;
const database = env.AZURE_SQL_DATABASE;
const port = +env.AZURE_SQL_PORT;
const type = env.AZURE_SQL_AUTHENTICATIONTYPE;


const noPasswordConfig = {
  server,
  port,
  database,
  authentication: {
    type
  },
  options: {
    encrypt: true
  }
};

let testQuery = `SELECT TimePeriod, Value FROM [dbo].[vw_LocalAuthorityMetricsExportFull] 
WHERE ONSCode = 'FA001'
AND MetricCode = 'FM001'`

export const myQuery = async ( testQuery ) => {

    // var poolConnection = await sql.connect(noPasswordConfig);
    // const result = await poolConnection.request().query(testQuery);
    // poolConnection.close();
    // return result;

    try {
        let poolConnection = await sql.connect(noPasswordConfig);
        //const result = await poolConnection.request().query(testQuery);
        //if(result) {console.log('Result:', result);}
       // console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(testQuery);

        // console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        // var columns = "";
        // for (var column in resultSet.recordset.columns) {
        //     columns += column + ", ";
        // }
        // console.log("%s\t", columns.substring(0, columns.length - 2));

        // output row contents from default record set
        // resultSet.recordset.forEach(row => {
        //     console.log("%s\t%s", row.CategoryName, row.ProductName);
        // });

        // close connection only when we're certain application is finished
        poolConnection.close();

        return {SUCCESS: "YEAH !", QUERY: testQuery, RESULT: resultSet.recordset} //poolConnection: JSON.parse(JSON.stringify(poolConnection))};
      } catch (error) {
        console.log('Error connecting to the database:', error);
        return {errorMsg:'Error connecting to the database:', detail: JSON.parse(JSON.stringify(error))};
        this.connected = false;
      }



  };

// export let myQuery =  () => env;

/**/