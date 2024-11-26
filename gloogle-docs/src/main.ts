import "./style.css";
import { authService } from "./services/auth";
import { createDocsApp } from "./components/DocsApp";
import { createLogin } from "./components/Login";

async function initializeApp() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  // Handle auth callback
  if (window.location.pathname === "/auth/callback") {
    try {
      await authService.handleCallback();
      window.location.href = "/";
    } catch (error) {
      console.error("Error handling callback:", error);
    }
    return;
  }

  // Setup app structure with footer
  app.innerHTML = `
    <div class="app">
      <div id="content"></div>
      <footer class="footer">
        <p>Made with ❤️ by <a href="https://supertokens.com">SuperTokens</a></p>
      </footer>
    </div>
  `;

  const content = document.querySelector<HTMLDivElement>("#content")!;

  // Check authentication status
  const isAuthenticated = await authService.isAuthenticated();

  if (isAuthenticated) {
    const user = await authService.getUser();
    createDocsApp(content, user);
  } else {
    createLogin(content);
  }

  // Setup event listeners
  document.addEventListener("login", async () => {
    await authService.login();
  });

  document.addEventListener("logout", async () => {
    await authService.logout();
    window.location.reload();
  });
}

initializeApp();
