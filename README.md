# Angular Module Federation

Please note, you **must** use **yarn** during the beta phase of CLI 11 b/c it allows to override dependencies to force the CLI into webpack 5.

# Installing Project Dependencies

* To install node packages, run `yarn`

# Building & Serving Projects

* To build all micro-frontend projects, run `npm run build:all`
* To serve all micro-frontend projects using the angular dev-server, run
  `npm run start:all`
* To serve all micro-frontend projects's production bundles, run
  `npm run start:prod:all`

## Build & Serve Micro-Frontends in Isolation

* To build a specific micro-frontend app, use the following notation:
  `npm run build:${project-name}`
  * Examples:
    * To build the shell app, run `npm run build:shell`
    * To build micro-frontend-1, run `npm run build:mf1`
    * ...etc.

* To serve a specific micro-frontend app using the angular dev-server, use the following notation:
  `npm run serve:${project-name}`
  * Examples:
    * To build the shell app, run `npm run serve:shell`
    * To build micro-frontend-1 (remote 1), run `npm run serve:mf1`
    * ...etc.

* **Note:** when serving micro-frontends along the shell application, always make sure all other micro-frontends are served before `shell` is loaded in the browser.


## Scaffolding

### Project Folder Structure

```
root
  |- /projects
  |  '- shell                      // Shell Micro-Frontend App (Host)
  |     '- webpack.shell.config.js
  |  '- mf1
  |     '- webpack.mf1.config.js
  |  '- mf2
  |     '- webpack.mf2.config.js
  |  '- ...                        // Micro-Frontend Apps (Remotes)
  |
```

## Adding New Micro-Frontend Projects

* To create a new remote micro-frontend project, run:
  `schematics:project a --name={PROJECT_NAME}`

## TODOs (Experiments)

### TODO 1: Shared & Isolated Dependencies

Shell uses shared Material
MF1 uses shared Material
MF2 uses its own Material
MF2 uses Unique Webpack Object


### TODO 2: Shared Multibrowser Support Setup & Theming

Can share
Can have adhoc-alone config

### TODO 3: Navigation

Has standalone routing
Has shared routing
Has non-router navigation

### TODO 4: Externals

Serves onlu needed dependencies (skip the ones host has)
Serves all depencies when host does not have them

### TODO 5: Dockerize

Serves onlu needed dependencies (skip the ones host has)
Serves all depencies when host does not have them

### TODO 6: Production Server

Serves onlu needed dependencies (skip the ones host has)
Serves all depencies when host does not have them

### TODO 7: NgRx Store

MF1 has standalone store
MF1 and Shell share Store

### TODO 7: Setup Unit & E2E testing infrastructure

has flexibility to use jest, karma, and both
add component and class tests included in component schematics

## References

1. [The Microfrontend Revolution: Module Federation in Webpack 5](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
2. [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
3. [Webpack](https://webpack.js.org/)
4. [TypeScript Lang](https://www.typescriptlang.org/)
5. TODO: add new angular-arkitects resources.
