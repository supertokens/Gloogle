import "./App.css";

import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { OAuth2ProviderPreBuiltUI } from "supertokens-auth-react/recipe/oauth2provider/prebuiltui";
import * as reactRouterDom from "react-router-dom";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";

function App() {
  return (
    <SuperTokensWrapper>
      <div className="root">
        <h1>Login with Gloogle</h1>
        <BrowserRouter>
          <Routes>
            {/*This renders the login UI on the /auth route*/}
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
              OAuth2ProviderPreBuiltUI,
              EmailPasswordPreBuiltUI,
            ])}
            {/*Your app routes*/}
          </Routes>
        </BrowserRouter>
      </div>
    </SuperTokensWrapper>
  );
}

export default App;
