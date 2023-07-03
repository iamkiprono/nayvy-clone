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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={project.projectImage}
        title="green iguana"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {project.projectTitle}
          </Typography>
          <Typography className="bg-[#DCFCE7] p-1 rounded-xl">
            {project.live && "Live"}
          </Typography>
        </Box>
        <Typography variant="body2" color="#4b5563">
          {project.projectDesc}
        </Typography>
        <Typography sx={{ color: "#4b5563" }}>{project.price} USD</Typography>
        <CardActions>
          <Link to={project.projectTitle}>
            <Button variant="outlined">Details</Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}
