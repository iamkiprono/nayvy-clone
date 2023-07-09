import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function DashboardCard({ title }) {
  return (
    <Card sx={{ width: 345, height: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            0
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {title === "No of products" && (
          <Button size="small" color="primary">
            View all
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
