const mongoose = require('mongoose');
const connectionString = "mongodb+srv://mtaha:fuckyoumongodb@cluster0.cchpb.mongodb.net/01-Task-Manager?retryWrites=true&w=majority"
const connectDB = () => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;