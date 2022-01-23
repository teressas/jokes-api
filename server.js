// Import Dependencies
const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// Configure Express
app.use(express.json(), express.urlencoded({ extended: true }));

// Routes
// This is where we import the users routes function from our user.routes.js file
// SERVER RUNS ALL ROUTES BEFORE CALLING ROUTES
console.log("server.js: before routes")
// ADD THIS BEFORE ADDING ROUTES!!!
require("./routes/joke.routes")(app);

// const AllMyJokeRoutes = require("./server/routes/joke.routes");
// AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
