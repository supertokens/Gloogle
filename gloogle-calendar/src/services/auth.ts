import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import config from "../../glgcal.json";

const settings = {
  authority: "http://localhost:3000/auth",
  client_id: config.clientId,
  redirect_uri: "http://localhost:5175/auth/callback",
  scope: "openid profile email",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

const createAuthService = () => {
  const userManager = new UserManager(settings);

  return {
    login: () => userManager.signinRedirect(),
    handleCallback: async () => {
      try {
        return await userManager.signinRedirectCallback();
      } catch (error) {
        console.error("Error handling callback:", error);
        throw error;
      }
    },
    logout: () => userManager.removeUser(),
    getUser: () => userManager.getUser(),
    isAuthenticated: async () => {
      const user = await userManager.getUser();
      return !!user && !user.expired;
    },
  };
};

export const authService = createAuthService();
