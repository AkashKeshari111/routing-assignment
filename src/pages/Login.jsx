import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { isAuth, UserLogin, email, setEmail, password, setPassword } =
    useContext(AuthContext);

  const handleLogin = ({
    email = "eve.holt@reqres.in",
    password = "cityslicka",
  }) => {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        UserLogin(email, res.token);
        console.log(res);
      });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
