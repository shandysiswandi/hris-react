import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ isAuthorized: false, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Simulate auth check (e.g. token presence, API call, etc.)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthorized(!!token);
  }, []);

  const login = () => {
    localStorage.setItem("token", "mock-token");
    setIsAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthorized(false);
  };

  return <AuthContext.Provider value={{ isAuthorized, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
