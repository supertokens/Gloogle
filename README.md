# 🏰 Gloogle 🏰

Gloogle is a demonstration project showcasing SuperTokens' Unified Login feature, illustrating how to create your own tech empire with a unified "Login with {YOUR_TECH_EMPIRE_NAME}" button.

## 🌟 Features

- Unified authentication across all services
- Multiple applications sharing the same auth backend
- Different frontend frameworks working together:
  - React (Gloogle Mail, Gloogle Auth)
  - Vanilla TypeScript (Gloogle Docs)
  - SolidJS (Gloogle Calendar)

## 📦 Projects

- **🔧 Backend** (`/backend`): Express.js backend with SuperTokens integration, using the [Unified Login feature](https://supertokens.com/docs/unified-login/introduction)
- **🔐 Gloogle Auth** (`/gloogle-auth`): The authentication service frontend built with React
- **📝 Gloogle Docs** (`/gloogle-docs`): Document editor built with Vanilla TypeScript
- **✉️ Gloogle Mail** (`/gloogle-mail`): Email client built with React
- **📅 Gloogle Calendar** (`/gloogle-calendar`): Calendar app built with SolidJS

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone git@github.com:supertokens/Gloogle.git
cd Gloogle
```

2. Install dependencies for all projects:

```bash
npm run install:all
```

3. Register the OAuth clients:

```bash
# Assuming you're running a Unix-like system
./register_services.sh
```

4. Start the services:

```bash
npm start
```

## 🌐 Services

- Backend: http://localhost:3000
- Gloogle Auth: http://localhost:3001
- Gloogle Docs: http://localhost:5173
- Gloogle Mail: http://localhost:5174
- Gloogle Calendar: http://localhost:5175

## 🛠️ Built With

- [SuperTokens](https://supertokens.com)
- [React](https://react.dev)
- [SolidJS](https://solidjs.com)
- [TypeScript](https://www.typescriptlang.org)
- [Express.js](https://expressjs.com)
- [Vite](https://vitejs.dev)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
