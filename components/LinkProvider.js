/**
 * This module exports a react component that provides to its children
 * the default Link component
 * @module metis-frontoffice/components/LinkProvider
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Link from './Link';


export default class LinkProvider extends Component {

  static childContextTypes = {
    Link: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  getChildContext = () => ({
    Link
  })
  
  render() {
    const {
      children
    } = this.props;
    return (
      <section>
        {children}
      </section>
    )
  }
}