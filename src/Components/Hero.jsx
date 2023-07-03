import React from "react";
import ProductCard from "./ProjectCard";
import ListProject from "./ListProject";
import Projects from "../Data/Projets";
  

const Hero = () => {

  return (
    <div>
      <div className="max-w-7xl m-auto p-6 flex gap-5 justify-center flex-wrap">
        {Projects.map((project) => {
          return <ProductCard project={project} />;
        })}
        <ListProject />
      </div>
    </div>
  );
};

export default Hero;
