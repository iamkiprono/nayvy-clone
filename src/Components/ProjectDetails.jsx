import React from "react";
import { useParams } from "react-router-dom";
import Projects from "../Data/Projets";
import ProjectDetailsCard from "./ProjectDetailsCard";

const ProjectDetails = () => {
  const { projectdetails } = useParams();
  console.table(Projects);
  return (
    <div>
      <div className="max-w-7xl m-auto flex justify-center p-6">
        {Projects.filter((proj) => proj.projectTitle === projectdetails).map(
          (project) => {
            return <ProjectDetailsCard Projects={project} />;
          }
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
