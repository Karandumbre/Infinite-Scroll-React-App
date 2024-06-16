import React from "react";
import { useSelector } from "react-redux";
import { Profile } from "../components/profile";

const ProfileContainer = () => {
  const UserData = useSelector((state) => state.data);

  return (
    <main>
      <h1>User Profiles</h1>
      <div className="profile-container row">
        {Array.isArray(UserData) &&
          UserData.length > 0 &&
          UserData.map((data, key) => {
            return <Profile key={key} data={data} />;
          })}
      </div>
    </main>
  );
};

export default ProfileContainer;
