/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
	experimental: { esmExternals: true },
});
module.exports = nextConfig;
