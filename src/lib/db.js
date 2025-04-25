
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

//let testQuery = `SELECT TimePeriod, Value FROM [dbo].[vw_LocalAuthorityMetricsExportFull] 
//WHERE ONSCode = 'FA001'
//AND MetricCode = 'FM001'`

export const myQuery = async (testQuery) => {


    try {
        let poolConnection = await sql.connect(noPasswordConfig);

        var resultSet = await poolConnection.request().query(testQuery);

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