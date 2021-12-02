const express = require("express")
const tasks = require("./routes/tasks")
const app = express()
const port = 3000;
const connectDB = require("./db/connect");
require("dotenv").config()

//middleware

//to send data as json
app.use(express.json())

//routes
app.get("/hello", (req, res) => res.send("Hello World!"))

//routes method to set the base url for all routes
app.use("/api/v1/tasks", tasks)

//refactored the code to create an async function that only starts the server if the mongodb connection is successful
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

start()

//we dont need to use quotes for .env files, directly copy the string data