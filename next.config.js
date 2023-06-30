/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: {
			displayName: false,
		},
	},
};
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
	experimental: { esmExternals: true },
});
module.exports = nextConfig;
