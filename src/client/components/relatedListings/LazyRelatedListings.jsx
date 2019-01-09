import React from 'react';
import Observer from '../Observer.jsx';

export default class LazyRelatedListings extends React.Component {
  render () {
    return (
      <Observer load={() => {
        import('slick-carousel/slick/slick.css')
        import('slick-carousel/slick/slick-theme.css')
        return import(/* chunkFilename: "RelatedListings" */ './RelatedListings.jsx')
      }}>
        {Component => Component ? <Component /> : <div>Related Listings is still loading</div>} 
      </Observer>
    )
  }
}