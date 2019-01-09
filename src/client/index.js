import React from 'react';
import $ from 'jquery';
import thunk from 'redux-thunk';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import rootReducer from './reducers/rootReducer';
import Gallery from './components/gallery/Gallery.jsx';
import Nav from './components/navbar/Nav.jsx';

import Loadable from 'react-loadable';
import LazyRelatedListing from './components/relatedListings/LazyRelatedListings.jsx'
import LoadableModal from './components/modal/LoadableModal.jsx'
import LoadableBooking from './components/booking/LoadableBooking.jsx'
import LoadableDescription from './components/description/LoadableDescription.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

import { floatButtonWhenEntering, highlightImageOnHover } from "./helpers/initialize";

const initialState = window.__initialState__;
delete window.__initialState__;

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <LazyRelatedListing />
    </Provider>,
    document.getElementById('related-listings-app')
  );
  
  hydrate(
    <Provider store={store}>
      <Gallery />
    </Provider>,
    document.getElementById('gallery-app')
  );
  
  hydrate(
    <Provider store={store}>
      <Nav />
    </Provider>,
    document.getElementById('nav-app')
  );
  
  hydrate(
    <Provider store={store}>
      <LoadableDescription />
    </Provider>,
    document.getElementById('description-app')
  );
  
  hydrate(
    <Provider store={store}>
      <LoadableModal />
    </Provider>,
    document.getElementById('modal-app')
  );
  
  hydrate(
    <Provider store={store}>
      <LoadableBooking />
    </Provider>,
    document.getElementById('booking-app')
  );
  
  $(document).ready(function() {
    const $galleryImages = $('.gallery-div');
    const $fourthImage = $('.img4');
    const $viewPhoto = $('.button-bottom');
  
    highlightImageOnHover($galleryImages);
    floatButtonWhenEntering($fourthImage);
    floatButtonWhenEntering($viewPhoto);
  });
})