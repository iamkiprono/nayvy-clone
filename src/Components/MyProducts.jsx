import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const MyProducts = () => {
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
        <div className="flex flex-col md:mt-40 mt-10 items-center">
          <p className="mb-4">No products</p>
          <Link to="/new">
            <Button variant="contained">Create your first product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
