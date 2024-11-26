declare module "supertokens-web-js/recipe/session" {
  export default class Session {
    static doesSessionExist(): Promise<boolean>;
    static signOut(): Promise<void>;
  }
}

declare module "supertokens-web-js/recipe/oauth2client" {
  export default class OAuth2Client {
    static init(config: {
      apiDomain: string;
      apiBasePath: string;
      clientId: string;
    }): void;
  }
}
