import { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import "./services/auth";
import "./App.css";

import CalendarApp from "./components/CalendarApp";
import Login from "./components/Login";
import Auth from "./components/Auth";

const App: Component = () => {
  return (
    <div class="app">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/auth/*" component={Auth} />
        <Route path="/" component={CalendarApp} />
      </Router>
      <footer class="footer">
        <p>
          Made with ❤️ by <a href="https://supertokens.com">SuperTokens</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
