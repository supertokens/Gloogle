#!/bin/bash

echo "Booting services..."

curl -X POST https://try.supertokens.com/recipe/oauth/clients -H "Content-Type: application/json" -d '{
      "clientName": "Gloogle Calendar",
      "responseTypes": ["code"],
      "grantTypes": ["authorization_code", "refresh_token"],
      "tokenEndpointAuthMethod": "none",
      "scope": "offline_access openid profile email",
      "redirectUris": ["http://localhost:5175/auth/callback"]
    }' > ./gloogle-calendar/glgcal.json
 
echo "Gloogle Calendar client registered"

curl -X POST https://try.supertokens.com/recipe/oauth/clients -H "Content-Type: application/json" -d '{
      "clientName": "Gloogle Docs",
      "responseTypes": ["code"],
      "grantTypes": ["authorization_code", "refresh_token"],
      "tokenEndpointAuthMethod": "none",
      "scope": "offline_access openid profile email",
      "redirectUris": ["http://localhost:5173/auth/callback"]
    }' > ./gloogle-docs/glgdocs.json

echo "Gloogle Docs client registered"

curl -X POST https://try.supertokens.com/recipe/oauth/clients -H "Content-Type: application/json" -d '{
      "clientName": "Gloogle Mail",
      "responseTypes": ["code"],
      "grantTypes": ["authorization_code", "refresh_token"],
      "tokenEndpointAuthMethod": "none",
      "scope": "offline_access openid profile email",
      "redirectUris": ["http://localhost:5174/auth/callback"]
    }' > ./gloogle-mail/glgmail.json

echo "Gloogle Mail client registered"
