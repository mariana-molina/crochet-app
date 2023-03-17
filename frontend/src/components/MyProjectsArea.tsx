import { ProjectCard } from './ProjectCard';

export const MyProjectsArea = ({ projects, setProjects, selectValue }: any) => {
	return (
		<>
			<h2>My projects:</h2>
			<div className="all-projects-area">
				{projects.data?.map((project: any) => {
					return (
						<ProjectCard
							key={project.id}
							projects={projects}
							project={project}
							setProjects={setProjects}
							selectValue={selectValue}
						/>
					);
				})}
			</div>
		</>
	);
};
