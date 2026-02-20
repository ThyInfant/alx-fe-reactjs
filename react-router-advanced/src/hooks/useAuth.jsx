import { useState } from "react";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true",
  );

  const login = () => {
    localStorage.setItem("authenticated", "true");
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
};
