import React, {Component} from 'react';
import PropTypes from 'prop-types';

let defaultStyle;
let defaultLocale;
let style;

const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

const inBrowser = isBrowser();

if (inBrowser) {
  defaultStyle = require('./assets/apa.csl');
  defaultLocale = require('./assets/english-locale.xml');
  style = require('plurishing-shared/dist/style.css')
} else {
  const fs = require('fs');
  const resolve = require('path').resolve;
  defaultStyle = fs.readFileSync(resolve(__dirname + '/assets/apa.csl'));
  defaultLocale = fs.readFileSync(resolve(__dirname + '/assets/english-locale.xml'));
  style = fs.readFileSync(resolve(__dirname + 'plurishing-shared/dist/style.css'));
}

// import style from 'plurishing-shared/dist/components/views/dynamic/ArticleTemplate.scss';


export default class GlobalsProvider extends Component {
  static childContextTypes = {
    citationStyle: PropTypes.string,
    citationLocale: PropTypes.string,
    renderingMode: PropTypes.string,
  }

  getChildContext = () => ({
    citationStyle: defaultStyle,
    citationLocale: defaultLocale,
    renderingMode: 'web',
  });


  render() {
    const {
      props: {
        children
      }
    } = this;
    return (
      <section className="GlobalsProvider">
        {children}
        <style>
          ${style}
        </style>
      </section>
    )
  }

}