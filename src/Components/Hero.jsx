import React from "react";
import ProductCard from "./ProjectCard";
import ListProject from "./ListProject";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [Projects, setProjects] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://nayvy-clone-api.onrender.com/products");
    const data = await res.json();
    setProjects(data);
    console.table(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="max-w-7xl m-auto p-6 flex gap-5 justify-center flex-wrap">
        {Projects.map((project) => {
          return <ProductCard key={project._id} project={project} />;
        })}
        <ListProject />
      </div>
    </div>
  );
};

export default Hero;
