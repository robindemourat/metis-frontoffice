/**
 * This module exports a react component that provides to its children
 * various context objects + default css styles
 * @module metis-frontoffice/components/GlobalsProvider
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import defaultStyle from './assets/apa';
import defaultLocale from './assets/french-locale';

import WebNotePointerPointer from 'metis-shared/dist/components/views/dynamic/WebNotePointerPointer';
import WebNoteContentPointer from 'metis-shared/dist/components/views/dynamic/WebNoteContentPointer';


let style;
let fs;
let resolve;

const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

const inBrowser = isBrowser();

if (inBrowser) {
  style = require('metis-shared/dist/style.css') + '\n' + require('react-table/react-table.css')
/**
 * @todo fix bug in loading css styles server-side
 * @body right now css is not loaded server-side because of webpack-related issues. 
 * Content is loaded nevertheless. 
 * To avoid unstyled rendering to user for now template include a full-screen
 * loading gif hiding unstyled content while waiting for the client
 * to take the lead.
 */
} else {
  // fs = require('fs');
  // resolve = require('path').resolve;
  // style = require('metis-shared/dist/style.css')
  // style = fs.readFile(resolve(__dirname + '/node_modules/metis-shared/dist/style.css'));
}

export default class GlobalsProvider extends Component {

  static childContextTypes = {
    citationStyle: PropTypes.string,
    citationLocale: PropTypes.string,
    renderingMode: PropTypes.string,

    NotePointerPointer: PropTypes.func,
    NoteContentPointer: PropTypes.func,
    getAssetUri: PropTypes.func,
    t: PropTypes.func,
  }

  getChildContext = () => ({
    citationStyle: defaultStyle,
    citationLocale: defaultLocale,
    renderingMode: 'web',
    NotePointerPointer: WebNotePointerPointer,
    NoteContentPointer: WebNoteContentPointer,

    getAssetUri: asset => `/static/data/${asset._id}/${asset.filename}`,

    t: t => t,
  });

  // static async getInitialProps({ req }) {
  //   console.log('in browser', inBrowser);
  //   if (!inBrowser) {
  //     console.log('in get initial props');
  //     const style = await new Promise((resolve, reject) => {
  //       console.log('in promise')
  //       fs.readFile(resolve(__dirname + 'metis-shared/dist/style.css'), (error, str) => {
  //         if (error) {
  //           reject(error)
  //         } else {
  //           resolve(str);
  //         }
  //       })
  //     });
  //     return {style};
  //   }
  //   return {};
  // }


  render() {
    const {
      props: {
        children
      }
    } = this;
    return (
      <section className="GlobalsProvider">
        {children}
        {
          // placeholder loading gif view
          // for serverside/no-js rendering (see comments above)
          !inBrowser &&
          <section
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              textAlign : 'center',
              background: 'white',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              justifyContent: 'center',
              left: 0,
              top: 0,
              fontFamily: 'open-sans, sans-serif'
            }}
          >
            <img src="/static/assets/loading.gif" />
          </section>
        }
        <style>
          ${style}
        </style>
      </section>
    )
  }
}