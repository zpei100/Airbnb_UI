import React from 'react';
import Loadable from 'react-loadable';
import Observer from '../Observer.jsx';

export default class LazyRelatedListings extends React.Component {
  render () {
    return (
      <Observer load={() => import(/* chunkFilename: "RelatedListings" */ './RelatedListings.jsx')}>
        {Component => Component ? <Component /> : <div>Related Listings is still loading</div>} 
      </Observer>
    )
  }
}