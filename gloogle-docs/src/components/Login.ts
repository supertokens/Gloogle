export function createLogin(container: HTMLDivElement) {
  const render = () => {
    container.innerHTML = `
      <div class="login-container">
        <h1>📝 Gloogle Docs</h1>
        <button id="login-button">Login with Gloogle</button>
      </div>
    `;

    setupEventListeners();
  };

  const setupEventListeners = () => {
    const loginButton = container.querySelector("#login-button");
    if (loginButton) {
      loginButton.addEventListener("click", () => {
        const event = new CustomEvent("login");
        document.dispatchEvent(event);
      });
    }
  };

  // Initial render
  render();
}
