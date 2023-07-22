import React from "react";
import ProductCard from "./ProjectCard";
import ListProject from "./ListProject";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Skeleton } from "@mui/material";

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
      <div className="m-auto flex max-w-7xl flex-wrap justify-center gap-5 p-6">
        {isLoading && (Array.from(new Array(6)) .map((skeleton, index)=>{
          return(
            <Box key={index} sx={{ width: 345, marginRight: 0.5, my: 5 ,height:300}}>
            <Skeleton variant="rectangular" width={345} height={250} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
          )
        })
        
        )}
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
