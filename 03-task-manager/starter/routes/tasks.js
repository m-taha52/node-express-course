const express = require("express")
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/tasks")
const router = express.Router()

//since we have used routes, we dont need to write the whole api/v1/tasks, the / directly starts from there
router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router