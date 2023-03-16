import React, { SyntheticEvent, useState } from 'react';

export const ProjectForm = ({ addNewProject }: any) => {
	const [projectName, setProjectName] = useState('');
	const [videoLink, setVideoLink] = useState('');
	const [yarn, setYarn] = useState('');
	const [needles, setNeedles] = useState('');
	const [category, setCategory] = useState('Clothes');
	const [pattern, setPattern] = useState('');

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const newProject = {
			projectName: projectName,
			videoLink: videoLink,
			yarn: yarn,
			needles: needles,
			category: category,
			pattern: pattern,
		};
		addNewProject(newProject);
	};

	return (
		<div className="form-area-centered">
			<div className="form-area">
				<h2>Add a new project</h2>
				<form onSubmit={handleSubmit} className="form-area__form">
					<input
						placeholder="Project name"
						id="addname"
						type="text"
						value={projectName}
						onChange={e => setProjectName(e.target.value)}
						className="form-area__form__input"
					></input>

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
						placeholder="Pattern"
						value={pattern}
						onChange={e => setPattern(e.target.value)}
						className="form-area__form__input"
					></textarea>
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
