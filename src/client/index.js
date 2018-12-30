import React from 'react';
import $ from 'jquery';
import thunk from 'redux-thunk';
import { hydrate, render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import rootReducer from './reducers/rootReducer';
import RelatedListings from './components/relatedListings/RelatedListings.jsx'
import Gallery from "./components/gallery/Gallery";
import Nav from "./components/navbar/Nav";
import Description from './components/description/Description.jsx';
import CarouselModal from './components/modal/CarouselModal';
import Booking from './components/booking/Booking.jsx';

import { floatButtonWhenEntering, highlightImageOnHover } from "./helpers/initialize";

const initialState = window.__initialState__;
delete window.__initialState__;

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

hydrate(
  <Provider store={store}>
    <RelatedListings />
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
    <Description />
  </Provider>,
  document.getElementById('description-app')
);

hydrate(
  <Provider store={store}>
    <CarouselModal />
  </Provider>,
  document.getElementById('modal-app')
);

render(
  <Provider store={store}>
    <Booking />
  </Provider>,
  document.getElementById('booking-app')
);

$(document).ready(function() {
  const $galleryImages = $('.gallery img');
  const $fourthImage = $('.img4');
  const $viewPhoto = $('.button-bottom');

  highlightImageOnHover($galleryImages)
  floatButtonWhenEntering($fourthImage);
  floatButtonWhenEntering($viewPhoto);
})
