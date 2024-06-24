const mongoose = require("mongoose");

// Connect to MongoDB
const connect = mongoose.connect('mongodb://localhost:27017/login') ;

// Check if the database connected successfully
connect.then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection error:", err);
});

// Define the schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create a model based on the schema
const collection = mongoose.model("users", LoginSchema);

// Export the model
module.exports = collection;
