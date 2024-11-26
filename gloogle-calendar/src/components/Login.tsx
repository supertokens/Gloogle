import { Component } from "solid-js";
import { authService } from "../services/auth";

const Login: Component = () => {
  const handleLogin = async () => {
    await authService.login();
  };

  return (
    <div class="login-container">
      <h1>📅 Gloogle Calendar</h1>
      <button onClick={handleLogin}>Login with Gloogle</button>
    </div>
  );
};

export default Login;
