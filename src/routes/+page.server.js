import { mysqlconnFn } from "$lib/db";

export async function load() {

  let mysqlconn = await mysqlconnFn();

  try {
    let results = await mysqlconn
      .query(   `SELECT TimePeriod, Value FROM [dbo].[vw_LocalAuthorityMetricsExportFull] 
                WHERE ONSCode = 'FA001'
                AND MetricCode = 'FM001'`)
      .then(function ([rows, fields]) {
        //        console.log(rows);
        return rows;
      })
    }
   catch (error) {
    console.error("Got an error!!!");
    console.log(error);
    return error;
  }
}