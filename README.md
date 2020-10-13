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