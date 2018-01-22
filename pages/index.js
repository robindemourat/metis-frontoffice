
import React from 'react'
import Link from 'next/link'

import Home from 'metis-shared/dist/components/views/dynamic/Home';
import LinkProvider from '../components/LinkProvider';
import GlobalsProvider from '../components/GlobalsProvider';

import data from '../static/data/data.json';

export default class MyPage extends React.Component {

  render () {
    return (
      <GlobalsProvider>
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