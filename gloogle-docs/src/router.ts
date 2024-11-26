import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export class Router {
  private routes: Map<string, (params?: any) => void>;

  constructor() {
    this.routes = new Map();

    // Listen to history changes
    history.listen(({ location }) => {
      this.handleRoute(location.pathname);
    });
  }

  addRoute(path: string, handler: (params?: any) => void) {
    this.routes.set(path, handler);
  }

  handleRoute(pathname: string) {
    for (const [path, handler] of this.routes.entries()) {
      if (pathname.startsWith(path)) {
        handler();
        return;
      }
    }
  }

  navigate(path: string) {
    history.push(path);
  }

  init() {
    this.handleRoute(window.location.pathname);
  }
}

export const router = new Router();
