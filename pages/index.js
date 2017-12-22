
import React from 'react'
import Link from 'next/link'

import Home from 'plurishing-shared/dist/components/views/dynamic/Home';
import LinkProvider from '../components/LinkProvider';

import data from '../static/data.json';

export default class MyPage extends React.Component {

  render () {
    return (
      <LinkProvider>
        <Home
          montage={data.montage}
          compositions={data.compositions}
        />
      </LinkProvider>
    )
  }
}