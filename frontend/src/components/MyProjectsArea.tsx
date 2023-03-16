import React from 'react';
import { ProjectCard } from './ProjectCard';

export const MyProjectsArea = ({ project }: any) => {
	return (
		<div>
			<h2>My projects:</h2>
			<ProjectCard project={project} />
		</div>
	);
};
