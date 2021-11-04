---
title: ES6 Modules and Typescript
---

[ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) allow JavaScript code to be split up
into "modules" that can allow other modules to import functions and variables. Modules in Submitty are loaded the 
same way as normal JavaScript files using the PHP function `$this->core->getOutput()->addInternalJs(...)`. Unlike normal 
JavaScript, modules are "bundled" together by esbuild. This process takes all files imported and creates a single, 
minified JavaScript file that is served to the user.

JavaScript modules are places in the `Submitty/site/ts` directory and running the install script will launch esbuild
and bundle files, the output will be places in the `Submitty/site/mjs` directory. You can run the command 
`npm run build` to manually bundle files after running `npm install` from the `Submitty/site` directory.

`npm run build` uses node to run the `Submitty/site/.build.js` file, this contains the logic for searching which files
to transpile and the configuration for esbuild.

## TypeScript

[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript that allows strongly typed syntax which is 
then transpiled into normal JavaScript. Any file with the `.ts` file type will be transpiled by esbuild as part of the 
`npm run build` command and Submitty install script.