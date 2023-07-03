import { useAuth0 } from "@auth0/auth0-react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";

const ProfilePage = () => {
  const { user } = useAuth0();
  return (
    <div className="flex justify-center">
      {!user && "Please Log In to view this page"}
      {user && (
        <div className="max-w-7xl m-auto p-6 flex flex-col items-center ">
          <div>
            <Avatar
              sx={{ width: 200, height: 200 }}
              src={user?.picture}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center text-[#4b5563]">
            <p className="my-2"> {user?.name}</p>
            <p className="my-2">@{user?.nickname}</p>
            <p className="my-2">
              <VerifiedIcon
                color={`${user?.email_verified ? "success" : "disabled"}`}
              />
              {user?.email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
