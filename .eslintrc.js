module.exports = {
	extends: [
		'next',
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		extraFileExtensions: ['.cjs'],
	},
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'@typescript-eslint/no-useless-constructor': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/promise-function-async': 'warn',
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		// playwright requires destructuring in fixtures even if you don't use anything 🤷‍♂️
		// 'no-empty-pattern': 'off',
		// '@typescript-eslint/consistent-type-imports': [
		// 	'warn',
		// 	{
		// 		prefer: 'type-imports',
		// 		disallowTypeAnnotations: true,
		// 		fixStyle: 'inline-type-imports',
		// 	},
		// ],
		// 'import/no-duplicates': ['warn', { 'prefer-inline': true }],
		// 'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
		// 'import/order': [
		// 	'warn',
		// 	{
		// 		alphabetize: { order: 'asc', caseInsensitive: true },
		// 		groups: [
		// 			'builtin',
		// 			'external',
		// 			'internal',
		// 			'parent',
		// 			'sibling',
		// 			'index',
		// 		],
		// 	},
		// ],
	},
}
