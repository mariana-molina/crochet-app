import { SyntheticEvent, useState } from 'react';
import { createNewProject, getProjects } from '../api';

export const ProjectForm = ({ setProjects, selectValue }: any) => {
	const [projectName, setProjectName] = useState('');
	const [videoLink, setVideoLink] = useState('');
	const [yarn, setYarn] = useState('');
	const [needles, setNeedles] = useState('');
	const [category, setCategory] = useState('Clothes');
	const [pattern, setPattern] = useState('');
	const [invalidNameInput, setInvalidNameInput] = useState('');
	const [invalidPatternInput, setInvalidPatternInput] = useState('');

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const newProject = {
			id: crypto.randomUUID(),
			projectName,
			videoLink,
			yarn,
			needles,
			category,
			pattern,
		};
		if (projectName && pattern) {
			await createNewProject(newProject);

			getProjects(setProjects, selectValue);
			setProjectName('');
			setVideoLink('');
			setYarn('');
			setNeedles('');
			setCategory('Clothes');
			setPattern('');
		}
		if (!projectName) {
			setInvalidNameInput('Please fill here');
		}
		if (!pattern) {
			setInvalidPatternInput('Please fill here');
		}
	};

	return (
		<div className="form-area-centered">
			<div className="form-area">
				<h2>Add a new project</h2>
				<form onSubmit={handleSubmit} className="form-area__form">
					<input
						placeholder="(*) Project name"
						id="addname"
						type="text"
						value={projectName}
						onChange={e => setProjectName(e.target.value)}
						className="form-area__form__input"
						onFocus={() => {
							setInvalidNameInput('');
						}}
					></input>
					{invalidNameInput && (
						<p className="invalid-input">{invalidNameInput}</p>
					)}
					<input
						placeholder="Video Link"
						id="addvideo"
						type="text"
						value={videoLink}
						onChange={e => setVideoLink(e.target.value)}
						className="form-area__form__input"
					></input>
					<input
						placeholder="Yarn"
						id="addyarn"
						type="text"
						value={yarn}
						onChange={e => setYarn(e.target.value)}
						className="form-area__form__input"
					></input>
					<input
						placeholder="Needle size"
						id="addneedles"
						type="text"
						value={needles}
						onChange={e => setNeedles(e.target.value)}
						className="form-area__form__input"
					></input>
					<select
						value={category}
						onChange={e => setCategory(e.target.value)}
						className="form-area__form__input select-bar"
					>
						<option>Clothes</option>
						<option>Accesories</option>
						<option>Amigurumis</option>
						<option>Other</option>
					</select>
					<textarea
						placeholder="(*)Pattern"
						value={pattern}
						onChange={e => setPattern(e.target.value)}
						className="form-area__form__input"
						onFocus={() => {
							setInvalidPatternInput('');
						}}
					></textarea>
					{invalidPatternInput && (
						<p className="invalid-input">{invalidPatternInput}</p>
					)}
					<button
						onSubmit={handleSubmit}
						className="button-75"
						role="button"
						type="submit"
					>
						<span className="text">Create!</span>
					</button>
				</form>
			</div>
		</div>
	);
};
