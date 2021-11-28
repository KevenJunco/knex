const express = require('express')
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');


routes
.get('/users', UserController.index)
.post('/users', UserController.create)
.delete('/users/:id', UserController.delete)
.put('/users/:id', UserController.update)

.get('/projects', ProjectController.index)
.post('/projects', ProjectController.create)
.delete('/projects/:id', ProjectController.delete)
.put('/projects/:id', ProjectController.update)




module.exports = routes;