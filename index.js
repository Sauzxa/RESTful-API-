const express = require('express');
const coursesRouter = require('./routes/courses-router'); // Ensure correct path to courses-router.js
const myapp = express();

myapp.use(express.json()); // Middleware to parse JSON bodies

// Use the courses router for handling requests to /api/courses
myapp.use('/api/courses', coursesRouter);

myapp.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
