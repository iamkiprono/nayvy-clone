import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const DashboardNavigation = () => {
  return (
    <div className="md:flex h-[90vh] w-full">
      <div className="md:w-[300px] text-sm bg-[#c9cdd4] flex-[2]  flex md:flex-col justify-around p-2 ">
        <NavLink className={"p-4  flex items-center hover:rounded-lg my-1 hover:bg-[#e5e7eb]"} to={""}>
          <HomeIcon /><p className="ml-2">Home</p>
        </NavLink>
        <NavLink className={"p-4  flex items-center hover:rounded-lg my-1 hover:bg-[#e5e7eb]"} to={"products"}>
          <GridViewIcon /><p className="ml-2">Products</p>
        </NavLink>
        <NavLink className={"p-4  flex items-center hover:rounded-lg my-1 hover:bg-[#e5e7eb] "} to={"payouts"}>
          <AccountBalanceWalletIcon /><p className="ml-2">Payout</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardNavigation;
