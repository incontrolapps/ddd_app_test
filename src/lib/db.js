import mysql from "mysql2/promise";
import { env } from '$env/dynamic/private';

//let mysqlconn = null;

export function mysqlconnFn() {
//   if (!mysqlconn) {
//     mysqlconn = mysql.createConnection({
//       host: env.AZURE_SQL_SERVER,
//       user: env.AZURE_SQL_USER,
//       password: env.AZURE_SQL_PASSWORD,
//       database: env.AZURE_SQL_DATABASE
//     });
//   }

  return env
}