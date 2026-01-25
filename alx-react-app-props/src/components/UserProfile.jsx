import React, { useContext } from "react";
import { UserContext } from "../UserContext"; // Adjust path if needed

const UserProfile = () => {
  const userData = useContext(UserContext); // Consume context

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "1.5em", marginBottom: "10px" }}>
        {userData.name}
      </h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{userData.age || "N/A"}</span>
      </p>
      <p>Email: {userData.email}</p>
      <p>Bio: {userData.bio || "No bio available."}</p>
    </div>
  );
};

export default UserProfile;
