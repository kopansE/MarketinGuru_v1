
const { BigQuery } = require('@google-cloud/bigquery');


const bigquery = new BigQuery({
    keyFilename: './BigQueryKey.json'
    //projectId: 'robotic-flash-444312-p6', // seems unnecessary
});


interface UserPermissionRow {
    User_Id: string;
    Permission_Type: number;
}



// TODO: add interfaces for each Table after defining schemas

export async function queryBigQuery(tableName: string) {
    // Your SQL query
    const query = `
    SELECT User_Id, Permission_Type
    FROM \`robotic-flash-444312-p6.1.${tableName}\` 
    LIMIT 20
  `;

    // Run the query
    const [rows] = await bigquery.query(query);
    // Explicitly type rows as UserPermissionRow[]
    const typedRows = rows as UserPermissionRow[];
    console.log('Query Results:');
    typedRows.forEach((row: UserPermissionRow) => {
        console.log(`User_Id: ${row.User_Id}, Permission_Type: ${row.Permission_Type}`);
    });
    return rows;
}

export async function insertRows(tableID: string, rows: []) {
    try {
        // Insert rows into the table
        await bigquery.dataset("1").table(tableID).insert(rows);
        console.log(`Inserted ${rows.length} rows successfully.`);
    } catch (error) {
        //console.log("error");
        console.error('Error inserting rows:', error);
    }
}
