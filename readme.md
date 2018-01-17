Plurishing front-office
===

This repository provides the source code for instanciating front-end isomorphic applications serving `Plurishing` web montages.

The application uses the [next.js](https://github.com/zeit/next.js) framework to generate an isomorphic application out of the box.

It provides a specific routes map, and uses the dynamic components provided by the [`plurishing-shared`](https://github.com/robindemourat/plurishing-shared) module to display specific views with the react library.

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

# Note on the updating procedure

The app is configured to listen to another server enabled to send it new data to use for displaying the website.

Here how it is done step by step :

* the app listen to POST request at `/update`
* when receiving a request, it first verifies that the request body contains a proper `pwd` property, matching with the one defined in the config
* then it copies all the received JSON data in a temp folder as a JSON file
* then, after parsing new JSON data and its static files dependencies, it fetches all the static asset files needed to display the content and then also store them in a temp folder
* (todo) at this step, the app is ready to display the new data in dev mode, it should be followed by a build step in prod mode
* (todo) a last step would be to use next.js to build a static html website with the new data, and possibly upload it through FTP to a distant static public website (see how it can be done [here](https://github.com/peritext/peritext-server-garlic-flavoured/blob/master/peritext-generator-next/next.config.js#L13))

Learn more about this procedure in `utils/update-data.js` source code file.


