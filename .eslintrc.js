module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Core rules for catching undefined variables
    'no-undef': 'error',           // Disallow use of undeclared variables
    'no-unused-vars': 'warn',      // Warn about declared but unused variables
    'no-redeclare': 'error',       // Disallow variable redeclaration
    'no-shadow': 'warn',           // Disallow variable declarations from shadowing
    
    // Additional helpful rules
    'no-implicit-globals': 'error', // Disallow declarations in global scope
    'prefer-const': 'warn',         // Suggest using const when variables are never reassigned
    'no-var': 'warn',              // Require let or const instead of var
    
    // Webpack/module related
    'import/no-unresolved': 'off',  // Turn off if you're not using eslint-plugin-import
  },
  globals: {
    // Define any global variables that are available in your project
    // Examples:
    // jQuery: 'readonly',
    // $: 'readonly',
    // process: 'readonly',  // if using webpack's DefinePlugin
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '*.min.js',
  ],
};