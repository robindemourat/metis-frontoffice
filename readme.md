Plurishing front-office
===

This repository provides the source code for instanciating front-end isomorphic applications serving `Plurishing` web montages.

The application uses the [next.js](https://github.com/zeit/next.js) framework to generate an isomorphic application out of the box.

It provides a specific routes map, and uses components provided by the [`plurishing-shared`](https://github.com/robindemourat/plurishing-shared) module to display specific views.

# Installation

```
# clone repo
git clone https://github.com/robindemourat/plurishing-frontoffice
cd plurishing-frontoffice
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

# Note on the updating processing

The app is configured to listen to another server enabled to send it new data to use for displaying the app.

Here how it is done :

* the app listen to POST request at `/update`
* when receiving a request, it first verifies that the request body contains a proper `pwd` property, matching with the one defined in the config
* then it copies all the received data in a temp folder as a json file
* then it fetches all the static asset files needed to display content and also store them in a temp folder
* (todo) at this step, the app is ready to display the new data in dev mode, it should be followed by a build step in prod mode
* (todo) a last step would be to use next.js to build a static html file with the new data, and possibly upload it through FTP to a distant static public website

Learn more about the procedure in `utils/update-data.js` source code file.


