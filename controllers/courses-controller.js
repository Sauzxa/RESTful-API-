let { courses } = require('../data/courses'); // Ensure correct path to courses.js
const { validationResult } = require('express-validator');

// Controller to get all courses
const getAllCourses = (req, res) => {
    res.json(courses);
};

// Controller to get a single course by ID
const getcourse = (req, res) => {
    const courseID = +req.params.courseID;
    const course = courses.find((course) => course.id === courseID);

    if (!course) {
        return res.status(404).send("Course not found");
    }
    res.json(course);
};

// Controller to add a new course
const addCourse = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);
    res.status(201).json(newCourse);
};

// Controller to update an existing course
const updateCourse = (req, res) => {
    const courseID = +req.params.courseID;
    let courseIndex = courses.findIndex((course) => course.id === courseID);

    if (courseIndex === -1) {
        return res.status(404).send("Course not found");
    }

    // Update the course
    courses[courseIndex] = { ...courses[courseIndex], ...req.body };
    res.status(200).json(courses[courseIndex]);
};

// Controller to delete a course
const deleteCourse = (req, res) => {
    const courseID = +req.params.courseID;
    const initialLength = courses.length;
    courses = courses.filter((course) => course.id !== courseID);

    if (courses.length === initialLength) {
        return res.status(404).send("Course not found");
    }

    res.json({ success: true });
};

// Export all controllers
module.exports = {
    getAllCourses,
    getcourse,
    addCourse,
    updateCourse,
    deleteCourse
};
