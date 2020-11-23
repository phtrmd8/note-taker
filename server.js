// DEPENDENCIES
// Series of npm packages to be used to give server useful functionality
var express = require("express");

// ROUTER
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// EXPRESS CONFIGURATION
// This sets up the basic properties for express server
var app = express();    // Tells node to create an "express" server
var PORT = process.env.PORT || 3000;    // Sets an initial port. (will use this later in the listener)

// Set up body parsing, static, & route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// LISTENER
// The below code effectively "starts" the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));