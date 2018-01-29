/**
 * This module exports a stateful component dedicated to render a composition view
 * @module metis-frontoffice/pages/composition
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';

import Composition from 'metis-shared/dist/components/views/dynamic/Composition';
import LinkProvider from '../components/LinkProvider';
import GlobalsProvider from '../components/GlobalsProvider';

import data from '../static/data/data.json';

export default class CompositionPage extends Component {

  render () {
    const {
      props: {
        url: {
          query: {
            id
          }
        }
      }
    } = this;
    const parameters = data.montage.data.compositions[id];
    const composition = data.compositions.find(c => c._id === parameters.target_composition_id);
    return (
      <GlobalsProvider>
        <Head>
          <title>{composition && composition.metadata.title || 'Métis'} - {data.montage.metadata.title || 'composition'}</title>
        </Head>
        <LinkProvider>
           <Composition
             parameters={parameters}
             composition={composition}
             compositions={data.compositions}
             resources={data.resources}
             montage={data.montage}
             assets={data.assets}
             renderingMode={'web'}
           />
        </LinkProvider>
      </GlobalsProvider>
    )
  }
}


