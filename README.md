# Due to Angular2 framework instability, this starter kit is NOT recomended for production yet.

More details in the followin [section](#known-issues)

![](./docs/angular2-basic-logo.png)

# Angular2 Basic v1.0.0-beta.1 

> Provides fast, reliable and extensible starter for the development of Angular2 projects.

## Demo 

* Link to the application demo:  [https://serenity-frontstack.github.io/angular2-basic/](https://serenity-frontstack.github.io/angular2-basic/) 

# Getting Started

## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x` and NPM `3.x.x`+
* We recommend to use `yarn` (`npm install -g yarn`) instead of npm

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `yarn install --global`:
* `webpack` (`yarn install --global webpack`)
* `webpack-dev-server` (`yarn install --global webpack-dev-server`)
* `karma` (`yarn install --global karma-cli`)
* `protractor` (`yarn install --global protractor`)
* `typescript` (`yarn install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `yarn install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `yarn install` to install all dependencies or `yarn`
* `yarn run serve` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `yarn run serve` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://localhost:3000/`).

### server
```bash
# development
yarn run serve
# production
yarn run serve:pro
```

## File Structure

We use the component approach in our starter. This is the standard Angular2 propose for developing scalable application and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 |   ├──index.html             * Index.html: where we generate our index page
 |   ├──polyfills.ts           * our polyfills file
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──modules/           * Funtional Units separated in individual modules 
 │   │   ├──shared/            * our shared component, reusable in any module
 │   │   ├──shell/             * our bootstrap component, visual scaffold of our app 
 │   │   │
 │   │   ├──app.environment.ts 
 │   │   ├──app.module.ts      
 │   │   ├──app.routes.ts      
 │   │   └──index.ts           
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──humans.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

## Features included

* Build process with WebPack for development and production environment.  
    * JIT (AOT under development).
* Unit Testing with Karma and Jasmine
* End-to-End testing with Protractor.
* Test reporting with HTML and file versions.
* Quality code test with TsLint and Codelyzer.
* Coverage threshold control, environnement configurable.      
* Preview Live reload on development.

## Application Features

* Style: FlexBox and Material style
* Mobile first layout
* Routing encapsulation by module with lazyload integrated
* Module LazyLoad by feature and nested modules
* Twitter and Youtube API integration

## Angular2 Known Issues
 
* Aot compile limitations:
    * Incorrect reference compilation of static source such as CSS, Images or Fonts
    * Module Lazyload, avoidable with workaround

More details in the [Angular2 issue repository](https://github.com/angular/angular/issues) 



