

import React, {Component} from 'react'
import PropTypes from 'prop-types';

import Composition from 'plurishing-shared/dist/components/views/dynamic/Composition';
import LinkProvider from '../components/LinkProvider';

import data from '../static/data/data.json';

export default class MyPage extends Component {

  static childContextTypes = {
    getAssetUri: PropTypes.func
  }

  getChildContext = () => ({
    getAssetUri: asset => `/static/data/${asset._id}/${asset.filename}`
  })

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
    const composition = data.compositions[parameters.target_composition_id];
    return (
      <LinkProvider>
        <Composition
          parameters={parameters}
          composition={composition}
          compositions={data.compositions}
          montage={data.montage}
          assets={data.assets}
          resources={data.resources}
        />
      </LinkProvider>
    )
  }
}