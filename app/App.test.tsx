import {
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
  afterAll,
  vi,
} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// Mock des composants qui pourraient causer des problèmes
vi.mock("./pages/Home/Home", () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock("./pages/Services/Services", () => ({
  default: () => <div>Services Page</div>,
}));

vi.mock("./pages/About/About", () => ({
  default: () => <div>About Page</div>,
}));

vi.mock("./pages/Contact/Contact", () => ({
  default: () => <div>Contact Page</div>,
}));

// Configuration des tests
describe("App", () => {
  beforeAll(() => {
    // Désactiver les avertissements de console pendant les tests
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("renders the app without errors", async () => {
    render(
      <MemoryRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </MemoryRouter>,
    );

    // Attendre que l'élément soit présent dans le DOM
    await waitFor(() => {
      const appElement = screen.getByTestId("app");
      expect(appElement).toBeInTheDocument();
    });
  });
});
