// Import the jest-dom for custom matchers
import "@testing-library/jest-dom/vitest";

// Setup cleanup after each test
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Run cleanup after each test
// This unmounts React trees that were mounted with render
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
