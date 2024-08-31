const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses-controller'); // Ensure correct path to courses-controller.js
const { body } = require('express-validator');

// Route to get all courses
router.get('/', coursesController.getAllCourses);

// Route to get a single course by ID
router.get('/:courseID', coursesController.getcourse);

// Route to add a new course
router.post('/', [
    body('title').notEmpty().isLength({ min: 2 }).withMessage('Title is required and must be at least 2 characters long'),
    body('price').notEmpty().isLength({ min: 2 }).withMessage('Price is required and must be at least 2 characters long')
], coursesController.addCourse);

// Route to update an existing course
router.patch('/:courseID', coursesController.updateCourse);

// Route to delete a course
router.delete('/:courseID', coursesController.deleteCourse);

module.exports = router;
