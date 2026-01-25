import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "navy",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        My Favorite Cities
      </h1>
    </header>
  );
};

export default Header;
