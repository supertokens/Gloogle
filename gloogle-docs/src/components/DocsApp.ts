export function createDocsApp(container: HTMLDivElement, user: any) {
  let content =
    localStorage.getItem("doc-content") || "Start typing your document here...";

  const render = () => {
    container.innerHTML = `
      <div class="docs-app">
        <header class="docs-header">
          <div class="header-left">
            <h1>📝 Gloogle Docs</h1>
          </div>
          <div class="header-right">
            <span class="user-email">${user?.profile?.email || ""}</span>
            <button id="logout-button">Logout 👋</button>
          </div>
        </header>
        <div class="toolbar">
          <select id="font-size">
            <option value="12px">12</option>
            <option value="14px" selected>14</option>
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="24px">24</option>
          </select>
          <button id="bold-btn" title="Bold"><b>B</b></button>
          <button id="italic-btn" title="Italic"><i>I</i></button>
          <button id="underline-btn" title="Underline"><u>U</u></button>
        </div>
        <main class="docs-content">
          <div class="editor" contenteditable="true">${content}</div>
        </main>
      </div>
    `;

    setupEventListeners();
  };

  const setupEventListeners = () => {
    const logoutButton = container.querySelector("#logout-button");
    const editor = container.querySelector(".editor") as HTMLDivElement;
    const fontSizeSelect = container.querySelector(
      "#font-size"
    ) as HTMLSelectElement;
    const boldBtn = container.querySelector("#bold-btn");
    const italicBtn = container.querySelector("#italic-btn");
    const underlineBtn = container.querySelector("#underline-btn");

    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        const event = new CustomEvent("logout");
        document.dispatchEvent(event);
      });
    }

    if (editor) {
      // Save content periodically
      editor.addEventListener("input", () => {
        content = editor.innerHTML;
        localStorage.setItem("doc-content", content);
      });

      // Handle paste to strip formatting
      editor.addEventListener("paste", (e) => {
        e.preventDefault();
        const text = e.clipboardData?.getData("text/plain");
        document.execCommand("insertText", false, text);
      });
    }

    // Formatting buttons
    boldBtn?.addEventListener("click", () => {
      document.execCommand("bold", false);
      editor?.focus();
    });

    italicBtn?.addEventListener("click", () => {
      document.execCommand("italic", false);
      editor?.focus();
    });

    underlineBtn?.addEventListener("click", () => {
      document.execCommand("underline", false);
      editor?.focus();
    });

    fontSizeSelect?.addEventListener("change", (e) => {
      const size = (e.target as HTMLSelectElement).value;
      editor.style.fontSize = size;
      editor?.focus();
    });
  };

  // Initial render
  render();
}
