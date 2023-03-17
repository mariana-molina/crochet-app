import axios from 'axios';
export const createNewProject = async newProject => {
	await axios
		.post('http://localhost:3000/', newProject)
		.then(response => {
			console.log(response);
		})
		.catch(error => console.log(`${error}: Error fetching project data`));
};

const getAllProjects = async setProjects => {
	await axios
		.get('http://localhost:3000/')
		.then(response => {
			setProjects(response.data);
		})
		.catch(error => console.log(`${error}: Error fetching project data`));
};
const getProjectsByCategory = async (setProjects, category) => {
	await axios
		.get(`http://localhost:3000/${category}`)
		.then(response => {
			setProjects(response.data);
		})
		.catch(error => console.log(`${error}: Error fetching project data`));
};
export const deleteProject = async projectId => {
	await axios
		.delete('http://localhost:3000/', {
			headers: { 'Content-Type': 'application/json' },
			data: { id: projectId },
		})
		.then(response => {
			console.log(response);
		})
		.catch(error => console.log(`${error}: Error fetching project data`));
};
export const getProjects = (setProjects, category) => {
	if (category === 'All') {
		getAllProjects(setProjects);
	} else {
		getProjectsByCategory(setProjects, category);
	}
};
