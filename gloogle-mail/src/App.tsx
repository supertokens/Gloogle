import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { MailApp } from "./MailApp";
import { AuthProvider } from "react-oidc-context";
import Auth from "./Auth";

import glgmail from "../glgmail.json";

const oidcConfig = {
  authority: "http://localhost:3000/auth",
  client_id: glgmail.clientId,
  redirect_uri: "http://localhost:5174/auth/callback",
  scope: "openid profile email",
};

export default function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="app">
        <h1>✉️ Gloogle Mail</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MailApp />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </BrowserRouter>
        <footer className="footer">
          <p>
            Made with ❤️ by <a href="https://supertokens.com">SuperTokens</a>
          </p>
        </footer>
      </div>
    </AuthProvider>
  );
}
