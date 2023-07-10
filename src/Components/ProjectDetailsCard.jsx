import React from "react";

const ProjectDetailsCard = ({ Projects: project }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-[360px]">
          <p className="font-bold text-2xl text-[#6366F1] mb-4">
            {project.name}
          </p>
          <p className="text-[#4b5563]">{project.description}</p>
        </div>
        <div>
          <img className="w-[700px]" src={project.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
