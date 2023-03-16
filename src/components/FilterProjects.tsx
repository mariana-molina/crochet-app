import React from 'react';

export const FilterProjects = () => {
	return (
		<div className="filter-area">
			<label htmlFor="filterproject">Filter by:</label>
			<select id="filterproject">
				<option>All</option>
				<option>Clothes</option>
				<option>Accesories</option>
				<option>Amigurumis</option>
				<option>Others</option>
			</select>
		</div>
	);
};
