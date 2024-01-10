const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const middleware = require('./middleware');

// User Authentication
router.post('/register', controllers.registerUser);
router.post('/login', controllers.loginUser);

// CRUD Operations
router.post('/data', middleware.authenticateToken, controllers.createData);
router.get('/data', middleware.authenticateToken, controllers.readData);
router.put('/data/:id', middleware.authenticateToken, controllers.updateData);
router.delete('/data/:id', middleware.authenticateToken, controllers.deleteData);

// Search and Filter
router.get('/search', middleware.authenticateToken, controllers.searchData);

// Pagination and Sorting
router.get('/paginate-sort', middleware.authenticateToken, controllers.paginateAndSortData);

module.exports = router;
