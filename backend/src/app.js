import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import supertokens from "supertokens-node";
import { middleware, errorHandler } from "supertokens-node/framework/express";
import OAuth2Provider from "supertokens-node/recipe/oauth2provider";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import * as jose from "jose";

async function verifySession(req, res, next) {
  let session = undefined;
  try {
    session = await Session.getSession(req, res, { sessionRequired: false });
  } catch (err) {
    if (
      !Session.Error.isErrorFromSuperTokens(err) ||
      err.type !== Session.Error.TRY_REFRESH_TOKEN
    ) {
      return next(err);
    }
  }

  // In this case we are dealing with a SuperTokens Session
  if (session !== undefined) {
    const userId = session.getUserId();
    req.userId = userId;
    return next();
  }

  // The OAuth2 Access Token needs to be manually extracted and validated
  let jwt = undefined;
  if (req.headers["authorization"]) {
    jwt = req.headers["authorization"].split("Bearer ")[1];
  }
  if (jwt === undefined) {
    return next(new Error("No JWT found in the request"));
  }

  try {
    const tokenPayload = await validateToken(jwt, "<CUSTOM_SCOPE>");
    const userId = tokenPayload.sub;
    req.userId = userId;
    return next();
  } catch (err) {
    return next(err);
  }
}

const JWKS = jose.createRemoteJWKSet(
  new URL("http://localhost:3000/api/authjwt/jwks.json")
);

// This is a basic example on how to validate an OAuth2 Token
// We have a separate page that talks more in depth about the process
async function validateToken(jwt, requiredScope) {
  const { payload } = await jose.jwtVerify(jwt, JWKS, {
    requiredClaims: ["stt", "scp", "sub"],
  });

  if (payload.stt !== 1) throw new Error("Invalid token");
  const scopes = payload.scp;
  if (!scopes.includes(requiredScope)) throw new Error("Invalid token");

  return payload;
}

// Initialize SuperTokens
supertokens.init({
  supertokens: {
    connectionURI: "https://try.supertokens.com",
  },
  appInfo: {
    appName: "Gloogle Services",
    apiDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteDomain: "http://localhost:3001",
    websiteBasePath: "/oauth",
  },
  recipeList: [OAuth2Provider.init(), Session.init(), EmailPassword.init()],
});

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:3001",
      "http://localhost:3000",
    ],
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// SuperTokens middleware
app.use(middleware());

// Error handling
app.use(errorHandler());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something broke!",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

app.listen(3000, () => {
  console.log("Server running on :3000");
});
