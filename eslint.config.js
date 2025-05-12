import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro'; 

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ['**/*.{ts,astro}'],
    ignores: [
      'node_modules/',
      'dist/',
      '.astro/**',
      '*.config.js',
      '*.json',
      '**/*.d.ts'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error']
    }
  },
  ...astroPlugin.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroPlugin.parser 
    },
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-css-selector': 'error'
    }
  }
);