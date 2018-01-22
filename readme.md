Metis front-office
===

This repository provides the source code for instanciating front-end isomorphic applications serving `Metis` web montages.

The application uses the [next.js](https://github.com/zeit/next.js) framework to generate an isomorphic application out of the box.

It provides a specific routes map, and uses the dynamic components provided by the [`metis-shared`](https://github.com/robindemourat/metis-shared) module to display specific views with the react library.

# Installation

```
# clone repo
git clone https://github.com/robindemourat/metis-frontoffice
cd metis-frontoffice
# install dependencies
npm install
# setup dev config
cp config/config.dev.sample.js config/config.dev.js
# ... fill with your specific dev config
# setup prod config
cp config/config.prod.sample.js config/config.prod.js
# ... fill with your specific prod config
```

# Usage

```
# run in development mode
npm run dev

# build isomorphic node app
npm run build

# run in production mode
npm run start
```

# Deployment

Transpiled code must be built with `npm run build` before going to production.

## Environment variables

Please note you have to set a series of env variables in production mode.

The list of env variables necessary to run the app in production mode is visible in `config/config.map.js`. Each variable name must be converted to constant notation convention (i.e. `backofficeBaseUri` becomes `BACKOFFICE_BASE_URI`).

Here is the list of env variables that must be set :

```bash

DATA_PROVIDER_BASE_URI # uri of the backend providing the data

SECRET # application secret, must be identical with the one of the backend server responsible for prividing new data

PORT # port to serve the application to
```

# Note on the updating procedure

The app is configured to listen to another server enabled to send it new data to use for displaying the website.

Here is how it is done step by step :

* the app listens to POST request at `/update`
* when receiving a request, it first verifies that the request body contains a proper hashed `pwd` property, matching with the one defined in the config
* then it copies all the received JSON data in a temp folder as a JSON file
* then, after parsing new JSON data and its static files dependencies, it fetches all the static asset files needed to display the content and then also store them in a temp folder
* at this step, the app is ready to display the new data in development mode
* it follows with a build step to update the production code
* it then builds a static html website out of the new data thanks to next-js `build-html` feature, and uploads it to a distant static public website through the [`surge`](https://surge.sh/) service

Learn more about this procedure by reading `utils/update-data.js` source code file.

## Licenses

LGPL-3.0

CECCIL-C
