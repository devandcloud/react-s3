// Setup for Vitest with React Testing Library
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Run cleanup after each test case
// This unmounts React trees that were mounted with render
afterEach(() => {
  cleanup();
});
