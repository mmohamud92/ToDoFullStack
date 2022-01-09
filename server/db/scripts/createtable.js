import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY, task VARCHAR(200))`;

async function createTasksTable() {
      const res = await query(sqlString);
      console.log("Created table", res);
}

createTasksTable();
