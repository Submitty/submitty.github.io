---
title: ES6 Modules and Typescript
---

[ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) allow JavaScript code to be split up
into "modules" that can allow other modules to import functions and variables. Modules in Submitty are loaded the 
same way as normal JavaScript files using the PHP function `$this->output->addInternalJs(...)`. Unlike normal 
JavaScript, modules are "bundled" together by esbuild. This process takes all files imported and creates a single, 
minified JavaScript file that is served to the user.

Unlike regular JS files, ES6 modules are not included into the global JS scope, and are self-contained. When a module is
executed, it only has access to the things that it imports, and we cannot call functions defined within modules directly from
the DOM. As such, to hook a function defined in a module to something in the DOM, such as a click event listener, you will need to 
use the addEventListener API. This seperation of regular JS and modules also extends to HTML, attributes such as `onclick`
and other inline event handlers cannot call functions defined in modules even if they are exported. 

JavaScript modules are placed in the `Submitty/site/ts` directory and running the install script will launch esbuild
and bundle files, the output will be placed in the `Submitty/site/mjs` directory. You can run the command 
`npm run build` to manually bundle files after running `npm install` from the `Submitty/site` directory.

`npm run build` uses node to run the `Submitty/site/.build.js` file, this contains the logic for searching which files
to transpile and bundle, along with the configuration for esbuild.

## Creating new modules

Any new module written should be a `.ts` file to take advantage the type safety of TypeScript. Top levels files
under the `ts` directory are considered entry points and once bundled will create a corresponding `.js` file under
the `public/mjs` directory along with a sourcemap. Support files for your module can be created under a new 
directory in the `ts` area, like the `utils` directory. On the PHP side, you will then only need
to include the single corresponding `mjs` file to your top level entry point file. This has the advantage of
reducing the number of files sent to the client.

## TypeScript

[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript that allows strongly typed syntax which is 
then transpiled into normal JavaScript. Any file with the `.ts` file type will be transpiled by esbuild as part of the 
`npm run build` command and Submitty install script.


## Loading JavaScript files

Once a module or regular JavaScript file is written it needs to be served to the user and included by the HTML. This is
done in PHP through the `addInternalModuleJs` and `addInternalJS`. Each function takes a target filename which is then
sent to the user and timestamped to prevent browsers from caching old versions. These functions are defined in the
`site/app/libraries/Output.php`.

Both functions work similarly but the `addInternalJS` searches the `site/public/js` directory and `addInternalModuleJs`
searches the `site/public/mjs` directory.

E.g:

```php
// searches the site/public/mjs area, its source file would be site/ts/foo.ts
$this->output->addInternalModuleJs('foo.js');
```

```php
// searches the site/public/js area
$this->output->addInternalJS('foo.js');
```
