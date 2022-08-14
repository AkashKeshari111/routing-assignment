import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, token, email, UserLogout } = useContext(AuthContext);
  const onChange = () => {
    UserLogout();
  };

  // console.log(token)
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.default
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        onClick={onChange}
        className={({ isActive }) =>
          isActive ? styles.active : styles.default
        }
        to="/login"
      >
        {isAuth ? "Logout" : "Login"}
      </NavLink>

      {isAuth && (
        <div>
          <li>{token}</li>
          <li>{email}</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
