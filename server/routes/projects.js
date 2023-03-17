const express = require('express');
const router = express.Router();
// const developers = require('../data/developers');
const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

/**
 * Initial population of developers from the json file
 * The `developersArr` is in-memory, so it is destroyed on
 * server restart.
 */
let projectsArr = [...projects];

const addProjectSchema = Joi.object().keys({
	name: Joi.string().min(3).max(30).required(),
});

// GET localhost:3001/developer
router.get('/', (_, res) => {
	res.json({ projects: projectsArr });
});

// POST localhost:3001/developer
router.post('/', (req, res) => {
	const result = addProjectSchema.validate(req.body);
	const { error } = result;
	const valid = error == null;
	if (!valid) {
		return res.status(400).json({
			message: 'Bad Request',
			error,
		});
	}
	const newProject = {
		id: uuidv4(),
		name: req.body.name,
		videoLink: req.body.videoLink,
		pattern: req.body.pattern,
	};
	projectsArr.push(newProject);
	res.send({
		project: newProject,
	});
});

// DELETE localhost:3001/developers
router.delete('/:id', (req, res) => {
	const projectId = req.params.id;
	const projectToDelete = projectsArr.find(dev => {
		return dev.id === projectId;
	});
	if (!projectToDelete) {
		return res.status(404).json({
			error: 'project with the provided Id not found',
		});
	}
	projectsArr = projectsArr.filter(dev => {
		return dev.id !== projectId;
	});
	res.send({
		project: projectToDelete,
	});
});

module.exports = router;
