import React from "react";
import { useParams } from "react-router-dom";
import Projects from "../Data/Projets";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Skeleton } from "@mui/material";
const ProjectDetails = () => {
  const { id } = useParams();
  const getSingleProject = async () => {
    const res = await fetch(
      `https://nayvy-clone-api.onrender.com/products/${id}`
    );
    const data = await res.json();

    console.log(data);
    return data;
  };

  // useEffect(() => {
  //   getSingleProject();
  // }, []);

  const {
    data: Project,
    error,
    isError,

    isFetching,
  } = useQuery({
    queryKey: ["project"],
    queryFn: getSingleProject,
  });
  return (
    <div>
      <div className="max-w-7xl m-auto flex justify-center p-6">
        {isError && <p>{error.message}</p>}
        {isFetching
          ? (
            <Box sx={{ width: "100%", marginRight: 0.5, my: 5 ,height:300}}>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="60%" />
              <Skeleton />
            </Box>
            <Skeleton variant="rectangular" width="100%" height={250} />
          </Box>
          )
          : Project?.map((project) => {
              return (
                <ProjectDetailsCard key={project._id} Projects={project} />
              );
            })}
      </div>
    </div>
  );
};

export default ProjectDetails;
