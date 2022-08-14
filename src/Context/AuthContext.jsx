import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProviderComponent = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, settoken] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const toggle = () => {
    setIsAuth(!isAuth);
  };

  const UserLogin = (email, token) => {
    setIsAuth(true);
    settoken(token);
    setEmail(email);
  };

  const UserLogout = () => {
    setIsAuth(false);
    settoken(null);
  };

  const value = {
    isAuth,
    setIsAuth,
    UserLogin,
    UserLogout,
    token,
    email,
    setEmail,
    password,
    setPassword,
    toggle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
