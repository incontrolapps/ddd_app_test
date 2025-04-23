import mysql from "mysql2/promise";
import { env } from '$env/static/private';

let mysqlconn = null;

export function mysqlconnFn() {
 if (!mysqlconn) {
 mysqlconn = mysql.createConnection({
host: "sqls-sbx-lgpm-uks-001.database.windows.net",
user: "CloudSA2846d83b",
port: 1433,
database: "sqldb-sbx-lgpm-uks-001"
});
}

  return mysqlconn
}