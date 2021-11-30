const express = require("express")
const tasks = require("./routes/tasks")
const app = express()
const port = 3000;

//middleware

//to send data as json
app.use(express.json())

//routes
app.get("/hello", (req, res) => res.send("Hello World!"))

//routes method to set the base url for all routes
app.use("/api/v1/tasks", tasks)
app.listen(port, () => console.log(`Task Manager listening on port ${port}!`))