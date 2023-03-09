import React from "react";
import Projects from "Project";
import { useQuery } from "@apollo/client";
import { ProjectListing } from "../../components";
import { typeDefs } from "../../schemas";

const BrowseProjects = () => {
	const { loading, error, data } = useQuery(typeDefs.GetProjects);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return <ProjectListing projects={data.projects} />;
};

const ProjectListing = ({ projects }) => {
	return (
		<div className="project-listing">
			<h1>Projects</h1>
			<ul className="project-list">
				{projects.map((project) => (
					<li key={project.id} className="project-item">
						<div className="project-info">
							<h2 className="project-name">{project.name}</h2>
							<p className="project-description">{project.description}</p>
							<p className="project-author">{project.author.name}</p>
							<p className="project-skillsNeeded">{project.skillsNeeded}</p>
						</div>
						<button className="collaborate-button">Collaborate!</button>
					</li>
				))}
			</ul>
		</div>
	);
};

ProjectListing.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			skillsNeeded: PropTypes.string.isRequired,
		})
	),
};

export default BrowseProjects;
