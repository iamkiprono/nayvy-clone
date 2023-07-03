import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LinearProgress from "@mui/material/LinearProgress";
import { CircularProgress } from "@mui/material";

const Header = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  return (
    <div className="border">
      <div className="flex items-center justify-between p-6 max-w-7xl m-auto ">
        <div className="text-lg font-bold">
          <Link to={"/"}>Nayvy</Link>
        </div>
        <div className="flex items-center">
          {!isAuthenticated && (
            <>
              {isLoading ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  <Button
                    onClick={() => loginWithRedirect()}
                    variant="outlined"
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => loginWithRedirect()}
                    variant="contained"
                    sx={{ ml: "20px" }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </>
          )}
          {isAuthenticated && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Header;
