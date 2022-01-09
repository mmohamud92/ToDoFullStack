import query from "../index.js";
import todoData from "../../todo-data.js";

async function populateTable() {
      for (let i = 0; i < todoData.length; i++) {
            const taskTitle = todoData[i].title;

            const res = await query(
                  `INSERT INTO tasks (task) VALUES ($1) RETURNING task`,
                  [taskTitle]
            );
            console.log(res);
      }
}

populateTable();
