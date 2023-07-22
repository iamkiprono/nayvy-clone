import React from "react";
import { Link } from "react-router-dom";

const ProjectDetailsCard = ({ Projects: project }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row ">
        <div className="w-[340px]">
          <p className="mb-4 text-2xl font-bold text-[#6366F1]">
            {project.name}
          </p>
          <p className="font-bold my-2">{project.price} {project.currency}</p>
          <p className="italic mb-4">{project.user}</p>
          <p className="mb-8 text-[#4b5563]">{project.description}</p>
          <p className="font-bold">Features:</p>
          {project.features.map((feaure) => {
            return <p className="mb-8 text-[#4b5563]">{feaure}</p>;
          })}
          <Link
            className="border p-4 shadow-lg"
            target="_blank"
            to={project.link}
          >
            Live Demo
          </Link>
        </div>
        <div>
          <img className="md:w-[700px] w-full" src={project.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
