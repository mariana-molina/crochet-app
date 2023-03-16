import React from 'react';

export const ProjectCard = ({ project }: any) => {
	return (
		<div>
			<section className="project-area__card">
				<div className="project-area">
					<span className="project-area__delete">
						<button className="project-button__delete">
							<i className="fa-solid fa-x"></i>
						</button>
					</span>
					<div className="project-card__text">
						<h3>{project.projectName}</h3>
						<p>{project.category}</p>
						<p>bulky yarn 3 units</p>
						<p>needle nr 5</p>
						<p>
							1st row: (RS). 1 sc in 2nd ch from hook and each ch to end of
							chain. 8 sc. 2nd row: Ch 1. 1 scbl in each sc to end of row. Turn.
							Rep last row until Ribbing, w h e n s l i g h t l y s t re t c h e
							d, measures 36 (40-44-48-56-60)" [91.5 (101.5-112-122-142-152.5)
							cm], ending on a RS row. Do not fasten off.
						</p>
					</div>
					<span className="project-area__buttons">
						<button className="project-button">
							<i className="fa-solid fa-pen-to-square"></i>
						</button>
						<button className="project-button">
							<i className="fa-solid fa-check"></i>
						</button>
					</span>
				</div>
			</section>
		</div>
	);
};
