// postcss.config.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Load TypeScript configuration via ts-node
require('ts-node/register');
const config = require('./postcss.config.ts').default;

export default config;
