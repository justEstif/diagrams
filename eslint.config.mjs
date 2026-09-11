import eslint from '@eslint/js';
import markdown from '@eslint/markdown';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslint from 'typescript-eslint';

const markdownFileLength = {
  rules: {
    'max-nonblank-lines': {
      meta: {
        type: 'suggestion',
        schema: [{ type: 'integer', minimum: 1 }],
        messages: {
          tooLong: 'File has {{actual}} nonblank lines; maximum is {{max}}.',
        },
      },
      create(context) {
        return {
          'root:exit'() {
            const lines = context.sourceCode.lines;
            const actual = lines.filter((line) => line.trim()).length;
            const max = context.options[0];

            if (actual > max) {
              context.report({
                loc: { line: max + 1, column: 1 },
                messageId: 'tooLong',
                data: { actual, max },
              });
            }
          },
        };
      },
    },
  },
};

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', '.agents/**', '.claude/**'],
  },
  {
    ...eslint.configs.recommended,
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.flat.recommended,
    plugins: {
      ...react.configs.flat.recommended.plugins,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      sonarjs,
    },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      complexity: ['error', 12],
      'max-depth': ['error', 4],
      'max-lines': [
        'error',
        { max: 1200, skipBlankLines: true, skipComments: true },
      ],
      'max-lines-per-function': [
        'error',
        { max: 180, skipBlankLines: true, skipComments: true },
      ],
      'max-params': ['error', 4],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react/no-unescaped-entities': 'off',
      'sonarjs/cognitive-complexity': ['error', 15],
    },
  },
  ...markdown.configs.recommended,
  {
    files: ['**/*.md'],
    plugins: { local: markdownFileLength },
    rules: { 'local/max-nonblank-lines': ['error', 300] },
  },
  prettier,
);
