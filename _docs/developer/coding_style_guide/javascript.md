---
title: JavaScript Style Guide
---

For JavaScript, we use the popular [eslint](https://eslint.org/) tool to ensure that
our codebase looks uniform across the files. To use eslint, you will need the
[NodeJS](https://nodejs.org/) runtime installed. We recommend using the current LTS
release.

## Linting Code

You can run eslint on your host system or on vagrant by navigating into the `site/`
directory and running:

```bash
npm run lint
```

To have eslint attempt to automatically fix any detected problems:

```bash
npm run lint:fix
```

If you wish to lint or fix a specific file, you will need to run the eslint executable directly,
by doing:

```bash
node_modules/.bin/eslint [--fix] <file>
```

## Style Rules

Below we enumerate all of the [eslint rules](https://eslint.org/docs/rules) that Submitty utilizes.
While most of the list should be relatively straight forward, we would like to specially point out
the `no-unused-vars` rule. Because Submitty utilizes multiple unbundled JS files which are included
separately, eslint has no way to know when variables come from outside the file, or if a given variable
is used in another file. As such, for variables which come from outside the current file, you will need to
annotate the file with a `/* global <variableName> */` directive in the file. For variables that are not
used in the current file, but used elsewhere, you'll need to use the `/* exported <variableName> */`
directive. This includes functions and classes as well as regular variables.

- [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)
- [block-spacing](https://eslint.org/docs/rules/block-spacing)
- [for-direction](https://eslint.org/docs/rules/for-direction)
- [getter-return](https://eslint.org/docs/rules/getter-return)
- [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
- [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)
- [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)
- [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
- [no-control-regex](https://eslint.org/docs/rules/no-control-regex)
- [no-debugger](https://eslint.org/docs/rules/no-debugger)
- [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)
- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)
- [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)
- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
- [no-empty](https://eslint.org/docs/rules/no-empty)
- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
- [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)
- [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
- [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)
- [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
- [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
- [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
- [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
- [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
- [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)
- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
- [no-setter-return](https://eslint.org/docs/rules/no-setter-return)
- [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)
- [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
- [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
- [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
- [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
- [use-isnan](https://eslint.org/docs/rules/use-isnan)
- [valid-typeof](https://eslint.org/docs/rules/valid-typeof)
- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
- [no-global-assign](https://eslint.org/docs/rules/no-global-assign)
- [no-octal](https://eslint.org/docs/rules/no-octal)
- [no-redeclare](https://eslint.org/docs/rules/no-redeclare)
- [no-self-assign](https://eslint.org/docs/rules/no-self-assign)
- [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)
- [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)
- [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
- [no-with](https://eslint.org/docs/rules/no-with)
- [no-delete-var](https://eslint.org/docs/rules/no-delete-var)
- [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
- [no-undef](https://eslint.org/docs/rules/no-undef)
- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
- [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)
- [constructor-super](https://eslint.org/docs/rules/constructor-super)
- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
- [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
- [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
- [require-yield](https://eslint.org/docs/rules/require-yield)
- [brace-style](https://eslint.org/docs/rules/brace-style) (stroustrup style, like PHP)
- [comma-dangle](https://eslint.org/docs/rules/comma-dangle)
- [default-param-last](https://eslint.org/docs/rules/default-param-last)
- [eol-last](https://eslint.org/docs/rules/eol-last)
- [indent](https://eslint.org/docs/rules/indent) (2 spaces for indentation)
- [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)
- [linebreak-style](https://eslint.org/docs/rules/linebreak-style) (use `\n` to end lines)
- [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)
- [no-var](https://eslint.org/docs/rules/no-var)
- [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)
- [prefer-const](https://eslint.org/docs/rules/prefer-const)
- [prefer-template](https://eslint.org/docs/rules/prefer-template)
- [quotes](https://eslint.org/docs/rules/quotes) (prefer single quotes)
- [semi](https://eslint.org/docs/rules/semi) (always have semi-colons)
- [semi-style](https://eslint.org/docs/rules/semi-style) (semi-colons are at end of lines)
- [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) (enforces no spaces between curly braces and variable in template literals)
