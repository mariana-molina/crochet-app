import { deleteProject, getProjects } from '../api';

export const ProjectCard = ({ project, setProjects, selectValue }: any) => {
	const { id, projectName, category, pattern } = project;

	const handleDelete = async () => {
		await deleteProject(id);
		getProjects(setProjects, selectValue);
	};
	const enableEdit = () => {
		// TO DO: Make each text a disabled input then enable it
		// and when clicking to save edit project to the new one
	};
	return (
		<section className="project-area__card">
			<div className="project-area">
				<span className="project-area__buttons">
					<button onClick={enableEdit} className="project-button__delete">
						<i className="fa-solid fa-pen-to-square"></i>
					</button>
					<button onClick={handleDelete} className="project-button__delete">
						<i className="fa-solid fa-x"></i>
					</button>
				</span>
				<div className="project-card__text">
					<h3>{projectName}</h3>
					<p>{category}</p>
					<p>bulky yarn 3 units</p>
					<p>needle nr 5</p>
					<p>{pattern}</p>
				</div>
				<span className="project-area__checked">
					<input type="checkbox" className="project-button"></input>
				</span>
			</div>
		</section>
	);
};
