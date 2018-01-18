import React, {Component} from 'react';
import PropTypes from 'prop-types';

import defaultStyle from './assets/apa';
import defaultLocale from './assets/english-locale';

import WebNotePointerPointer from 'plurishing-shared/dist/components/views/dynamic/WebNotePointerPointer';
import WebNoteContentPointer from 'plurishing-shared/dist/components/views/dynamic/WebNoteContentPointer';

let style;
let fs;
let resolve;

const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

const inBrowser = isBrowser();

if (inBrowser) {
  style = require('plurishing-shared/dist/style.css')
/**
 * @todo fix bug in loading css styles server-side
 */
} else {
  // fs = require('fs');
  // resolve = require('path').resolve;
  // style = require('plurishing-shared/dist/style.css')
  // style = fs.readFile(resolve(__dirname + '/node_modules/plurishing-shared/dist/style.css'));
}


export default class GlobalsProvider extends Component {

  static childContextTypes = {
    citationStyle: PropTypes.string,
    citationLocale: PropTypes.string,
    renderingMode: PropTypes.string,

    NotePointerPointer: PropTypes.func,
    NoteContentPointer: PropTypes.func,
    getAssetUri: PropTypes.func
  }

  getChildContext = () => ({
    citationStyle: defaultStyle,
    citationLocale: defaultLocale,
    renderingMode: 'web',
    NotePointerPointer: WebNotePointerPointer,
    NoteContentPointer: WebNoteContentPointer,

    getAssetUri: asset => `/static/data/${asset._id}/${asset.filename}`
  });

  // static async getInitialProps({ req }) {
  //   console.log('in browser', inBrowser);
  //   if (!inBrowser) {
  //     console.log('in get initial props');
  //     const style = await new Promise((resolve, reject) => {
  //       console.log('in promise')
  //       fs.readFile(resolve(__dirname + 'plurishing-shared/dist/style.css'), (error, str) => {
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