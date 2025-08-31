const fs = require("fs");
const path = require("path");

const isProd = process.env.DEPLOY_ENV === "live";

const robotsContent = isProd
  ? `User-agent: *
Allow: /
`
  : `User-agent: *
Disallow: /`;

fs.writeFileSync(path.join(__dirname, "../public/robots.txt"), robotsContent);

console.log(`✅ robots.txt généré pour ${isProd ? "PROD" : "DEV"}`);
