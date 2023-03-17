import { useState } from 'react';
import './App.css';
import { MyProjectsArea } from './components/MyProjectsArea';
import { ProjectForm } from './components/ProjectForm';
import { FilterProjects } from './components/FilterProjects';

function App() {
	const [projects, setProjects] = useState([]);
	const [selectValue, setSelectValue] = useState('All');

	return (
		<div className="App">
			<header className="header">
				<h1 className="header__title">
					StitchStash{' '}
					<img className="logo" src="./output-onlinepngtools.png" alt="" />
				</h1>

				<nav className="header__nav">
					<h3>Log in/Register</h3>
				</nav>
			</header>
			<div>
				<ProjectForm setProjects={setProjects} selectValue={selectValue} />
				<FilterProjects
					setProjects={setProjects}
					selectValue={selectValue}
					setSelectValue={setSelectValue}
				/>
				<MyProjectsArea
					projects={projects}
					setProjects={setProjects}
					selectValue={selectValue}
				/>
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
