import query from "../db/index.js";

export async function getAllTasks() {
      const data = await query(`SELECT * FROM tasks;`);
      return data.rows;
}

export async function createTask(taskInsert) {
      const data = await query(
            `INSERT INTO tasks (task) VALUES($1) RETURNING *`,
            [taskInsert]
      );
      return data.rows;
}

export async function deleteTask(taskDelete) {
      const data = await query(`DELETE FROM tasks WHERE id = $1`, [taskDelete]);
}

export async function findTask(taskToFind) {
      const data = await query(`SELECT * FROM tasks WHERE id = $1`, [
            taskToFind,
      ]);
      return data.rows;
}

export async function updateTask(idToUpdate, taskToUpdate) {
      const data = await query(`UPDATE tasks SET task = $1 WHERE id = $2`, [
            taskToUpdate,
            idToUpdate,
      ]);
      return data.rows;
}
