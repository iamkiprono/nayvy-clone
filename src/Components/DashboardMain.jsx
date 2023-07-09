import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DashboardCard from "./Card";

const DashboardMain = () => {
  return (
    <div className="flex-[8]">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p>My Products</p>
          </div>
          <div>
            <Link to="/new">
              <Button variant="contained">Add new product</Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 mt-10 items-center">
          <DashboardCard title="No of products" />
          <DashboardCard title="No of buyers" />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
