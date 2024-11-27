import OAuth2Provider from "supertokens-auth-react/recipe/oauth2provider";
import Session from "supertokens-auth-react/recipe/session";
import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";

export const initAuth = () => {
  SuperTokens.init({
    appInfo: {
      appName: "Gloogle Auth",
      apiDomain: "http://localhost:3000",
      apiBasePath: "/auth",
      websiteDomain: "http://localhost:3001",
      websiteBasePath: "/oauth",
    },
    recipeList: [EmailPassword.init(), OAuth2Provider.init(), Session.init()],
  });
};
