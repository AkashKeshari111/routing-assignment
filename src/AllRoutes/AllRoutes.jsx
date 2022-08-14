import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UsersTitle from "../pages/UsersTitle";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/title/:title"
        element={
          <PrivateRoute>
            <UsersTitle />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
