import { useEffect } from 'react';
import { getProjects } from '../api';

export const FilterProjects = ({
	setProjects,
	selectValue,
	setSelectValue,
}: any) => {
	useEffect(() => {
		getProjects(setProjects, selectValue);
	}, [selectValue]);

	return (
		<div className="filter-area">
			<label htmlFor="filterproject">Filter by:</label>
			<select
				value={selectValue}
				id="filterproject"
				onChange={e => setSelectValue(e.target.value)}
			>
				<option value="All">All</option>
				<option value="Clothes">Clothes</option>
				<option value="Accesories">Accesories</option>
				<option value="Amigurumis">Amigurumis</option>
				<option value="Other">Other</option>
			</select>
		</div>
	);
};
