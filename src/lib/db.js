import sql from 'mssql';
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

export const myQuery = async (testQuery) => {
  try {
    let poolConnection = await sql.connect(noPasswordConfig);
    var resultSet = await poolConnection.request().query(testQuery);
    poolConnection.close();
    return { SUCCESS: "YEAH !", QUERY: testQuery, RESULT: resultSet.recordset } //poolConnection: JSON.parse(JSON.stringify(poolConnection))};
  } 
  catch (error) {
    console.log('Error connecting to the database:', error);
    return { errorMsg: 'Error connecting to the database:', detail: JSON.parse(JSON.stringify(error))
    };
  }



};
export const getTableNames = async () => {
  try {
    let poolConnection = await sql.connect(noPasswordConfig);
    var resultSet = await poolConnection.request().query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'");
    poolConnection.close();
    return { SUCCESS: "YEAH !", QUERY: "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'", RESULT: resultSet.recordset }
  } 
  catch (error) {
    console.log('Error connecting to the database:', error);
    return { errorMsg: 'Error connecting to the database:', detail: JSON.parse(JSON.stringify(error))
    };
  }
};


export const getColumnNames = async (tableName) => {
  try {
    let poolConnection = await sql.connect(noPasswordConfig);
    var resultSet = await poolConnection.request().query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${tableName}'`);
    poolConnection.close();
    return { SUCCESS: "YEAH !", QUERY: `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${tableName}'`, RESULT: resultSet.recordset }
  } 
  catch (error) {
    console.log('Error connecting to the database:', error);
    return { errorMsg: 'Error connecting to the database:', detail: JSON.parse(JSON.stringify(error))
    };
  }
};
