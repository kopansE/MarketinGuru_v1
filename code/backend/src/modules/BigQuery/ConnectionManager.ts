// Import the Google Cloud BigQuery client library
const { BigQuery } = require('@google-cloud/bigquery');

// Set up your BigQuery client
const bigquery = new BigQuery({
    keyFilename: './robotic-flash-444312-p6-8f8894f1429f.json', // Replace with the path to your JSON key file
    projectId: 'robotic-flash-444312', // Replace with your project ID
});

// Define the row type based on your schema
interface UserPermissionRow {
    User_Id: string;
    Permission_Type: number;
}
export async function queryBigQuery() {
    // Your SQL query
    const query = `
    SELECT User_Id, Permission_Type
    FROM \`robotic-flash-444312.1.UserPermissions\` 
    LIMIT 10
  `;

    // Run the query
    const [rows] = await bigquery.query(query);

    // Explicitly type rows as UserPermissionRow[]
    const typedRows = rows as UserPermissionRow[];

    console.log('Query Results:');
    typedRows.forEach((row: UserPermissionRow) => {
        console.log(`User_Id: ${row.User_Id}, Permission_Type: ${row.Permission_Type}`);
    });
}

export async function insertRows() {
    const rows = [
        { User_Id: 'user1', Permission_Type: 1 },
        { User_Id: 'user2', Permission_Type: 2 },
        { User_Id: 'user3', Permission_Type: 3 },
    ];

    try {
        // Insert rows into the table
        await bigquery.dataset("robotic-flash-444312-p6.1").table("UserPermissions").insert(rows);
        console.log(`Inserted ${rows.length} rows successfully.`);
    } catch (error) {
        console.error('Error inserting rows:', error);
    }
}

// Run the query function
queryBigQuery().catch(console.error);
