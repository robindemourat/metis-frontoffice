/**
 * This module exports a stateful component dedicated to render the home view
 * @module metis-frontoffice/pages/index
 */

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Home from 'metis-shared/dist/components/views/dynamic/Home';
import LinkProvider from '../components/LinkProvider';
import GlobalsProvider from '../components/GlobalsProvider';

import data from '../static/data/data.json';

export default class MyPage extends React.Component {

  render () {
    return (
      <GlobalsProvider>
        <Head>
          <title>{data.montage.metadata.title || 'Métis'}</title>
        </Head>
        <LinkProvider>
          <Home
            montage={data.montage}
            compositions={data.compositions}
          />
        </LinkProvider>
      </GlobalsProvider>
    )
  }
}