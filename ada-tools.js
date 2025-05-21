#!/usr/bin/env node

const { ESLint } = require("eslint");
const fs = require("fs");

(async function main() {
  const filePath = process.argv[2];
  const code = fs.readFileSync(filePath, "utf8");

  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        requireConfigFile: false
      },
      plugins: ["jsx-a11y"],
      extends: ["plugin:jsx-a11y/recommended"]
    }
  });

  const results = await eslint.lintText(code, { filePath });
  const issues = results[0].messages.map(msg => ({
    ruleId: msg.ruleId,
    message: msg.message,
    line: msg.line,
    column: msg.column
  }));

  console.log(JSON.stringify(issues, null, 2));
})();
