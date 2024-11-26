import { Component, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { authService } from "../services/auth";

const Auth: Component = () => {
  const navigate = useNavigate();

  onMount(async () => {
    try {
      await authService.handleCallback();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error handling callback:", error);
    }
  });

  return <div>Loading...</div>;
};

export default Auth;
