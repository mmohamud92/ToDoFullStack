import express from "express";
const router = express.Router();
import {
      getAllTasks,
      createTask,
      findTask,
      updateTask,
      deleteTask,
} from "../models/todo.js";

/* GET tasks listing. */
router.get("/", async function (req, res) {
      const allTasks = await getAllTasks();
      res.json({
            success: true,
            payload: allTasks,
      });
});

// Find task by ID
router.get("/:id", async function (req, res) {
      const { id } = req.params;
      const taskByID = await findTask(id);
      res.json({
            success: true,
            payload: taskByID,
      });
});

// Create new todo/task

router.post("/", async function (req, res) {
      const { task } = req.body;
      const newTask = await createTask(task);
      res.json({
            success: true,
            payload: newTask,
      });
});

router.put("/:id", async function (req, res) {
      const { task } = req.body;
      console.log(task);
      const { id } = req.params;
      const updatedTask = await updateTask(id, task);
      res.json({
            success: true,
            message: "Task has now been updated",
      });
});

router.delete("/:id", async function (req, res) {
      const { id } = req.params;
      const deletedTask = deleteTask(id);
      res.json({
            success: true,
            message: "Task has now been deleted",
      });
});

router.post("/");

export default router;
