import React, { useState } from 'react';
import './App.css';
import { MyProjectsArea } from './components/MyProjectsArea';
import { ProjectForm } from './components/ProjectForm';
import { FilterProjects } from './components/FilterProjects';

type Project = {
	projectName: string;
	videoLink?: string;
	yarn?: string;
	needles?: string;
	category: string;
	pattern: string;
};
function App() {
	const [project, setProject] = useState([]);

	//first add a proyect into the db
	const addNewProject = (newProject: any) => {};

	//get projects

	return (
		<div className="App">
			<header className="header">
				<h1 className="header__title">StitchStash</h1>
				<nav className="header__nav">
					<img src="" alt="" />
					<h3>log in/Register</h3>
				</nav>
			</header>
			<div>
				<ProjectForm addNewProject={addNewProject} />
				<FilterProjects />
				<MyProjectsArea project={project} />
			</div>
			<footer>
				<div className="footer">
					<p>Thanks for using StitchStash!</p>
					<p>Contact Info: marsmolina20@stitchstash.com</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
