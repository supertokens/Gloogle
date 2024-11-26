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
    recipeList: [
      EmailPassword.init(),
      OAuth2Provider.init({}),
      Session.init({
        override: {
          functions: (oI) => {
            return {
              ...oI,
              shouldDoInterceptionBasedOnUrl: (
                url,
                apiDomain,
                sessionTokenBackendDomain
              ) => {
                try {
                  let urlObj = new URL(url);
                  // Interception should be done only for routes that need the SuperTokens Session Tokens
                  const isAuthApiRoute = urlObj.pathname.startsWith("/auth");
                  const isOAuth2ApiRoute =
                    urlObj.pathname.startsWith("/auth/oauth");
                  if (!isAuthApiRoute || isOAuth2ApiRoute) {
                    return false;
                  }
                } catch (ignored) {}
                return oI.shouldDoInterceptionBasedOnUrl(
                  url,
                  apiDomain,
                  sessionTokenBackendDomain
                );
              },
            };
          },
        },
      }),
    ],
  });
};
