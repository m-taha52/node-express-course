// all the main req/res functions come here

const Task = require("../models/task")

const getAllTasks = (req, res) => {
    res.send("all items")
}

const createTask = async(req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })

}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send("update task")
}

const deleteTask = (req, res) => {
    res.send("delete ask")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}