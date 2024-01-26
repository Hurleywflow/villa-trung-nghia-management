
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
 	arrowParens: "avoid",
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: true,
	printWidth: 80,
	proseWrap: "always",
	quoteProps: "as-needed",
	requirePragma: false,
	semi: false,
	singleAttributePerLine: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: false,
	overrides: [
		{
			files: ["**/*.json"],
			options: {
				useTabs: false
			}
		}
	],
	plugins: ["prettier-plugin-tailwindcss"]
};

module.exports = config;
