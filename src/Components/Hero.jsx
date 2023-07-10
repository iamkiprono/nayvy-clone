import React from "react";
import ProductCard from "./ProjectCard";
import ListProject from "./ListProject";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const Hero = () => {
  const getProducts = async () => {
    const res = await fetch("https://nayvy-clone-api.onrender.com/products");
    const data = await res.json();
    console.table(data);
    return data;
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const {
    data: Projects,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      <div className="max-w-7xl m-auto p-6 flex gap-5 justify-center flex-wrap">
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {Projects?.map((project) => {
          return <ProductCard key={project._id} project={project} />;
        })}
        <ListProject />
      </div>
    </div>
  );
};

export default Hero;
