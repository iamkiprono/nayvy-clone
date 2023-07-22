import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";

export default function ProductCard({ project }) {
  return (
    <Card sx={{ width: 345 }}>
      <img className="h-[200px] object-cover" src={project.image} alt="" />
      {/* <CardMedia sx={{ height: 200 , objectFit: "contain"}} image={project.image} /> */}
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography className="rounded-xl bg-[#DCFCE7] p-1">
            {project.live && "Live"}
          </Typography>
        </Box>
        <Typography variant="body2" color="#4b5563">
          {project.description}
        </Typography>
        <p className="mt-2 font-bold">
          {project.price} {project.currency}
        </p>
        <CardActions>
          <Link to={project._id}>
            <Button variant="outlined">Details</Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}
