// all the main req/res functions come here

const getAllTasks = (req, res) => {
    res.send("all items")
}

const createTask = (req, res) => {
    res.send("new task")
}

const getTask = (req, res) => {
    res.send("get task")
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