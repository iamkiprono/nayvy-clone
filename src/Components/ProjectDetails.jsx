import React from "react";
import { useParams } from "react-router-dom";
import Projects from "../Data/Projets";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { useState } from "react";
import { useEffect } from "react";

const ProjectDetails = () => {
  const [Project, setProject] = useState([]);
  const { id } = useParams();
  const getSingleProject = async () => {
    const res = await fetch(`https://nayvy-clone.vercel.app//products/${id}`);
    const data = await res.json();
    setProject(data);
    console.log(data);
  };

  useEffect(() => {
    getSingleProject();
  }, []);
  return (
    <div>
      <div className="max-w-7xl m-auto flex justify-center p-6">
        {Project.map((project) => {
          return <ProjectDetailsCard key={project._id} Projects={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
