import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import session from 'express-session';
import compression from 'compression';
import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import template from './template';
import { User } from './db/schema';
import rootReducer from '../client/reducers/rootReducer';

import Gallery from '../client/components/gallery/Gallery';
import Nav from '../client/components/navbar/Nav';

import Description from '../client/components/description/Description.jsx';

import RelatedListings from '../client/components/relatedListings/RelatedListings';
import CarouselModal from '../client/components/modal/CarouselModal';
// import Booking from '../client/components/booking/Booking.jsx';

import { getRoomAndUserInfo, addDates } from './handlers/getRoomAndUserInfo';

import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../dist/react-loadable.json';

const app = express();
const port = process.env.PORT || 3001;

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(session({
    secret: 'password',
    saveUninitialized: true,
    resave: false
  })
);

app.get('/', function(req, res) {
  res.send('please visit /rooms/:id')
});

app.post('/addDates', function({body: {id, datesBooked}}, res) {
  addDates({id, datesBooked}).then(room => {
    res.send(room)
  });
});

app.post('/updateFavorites', function(req, res) {
  const userId = req.session.user || 15;
  const { id } = req.body;

  User.findOne({ id: userId }).then(({ favorites }) => {
    const len = favorites.length;
    favorites = favorites.filter(num => num !== id);
    if (favorites.length === len) favorites.push(id);

    User.findOneAndUpdate({ id: userId }, { $set: { favorites } }, { new: true }).then(result => {
      res.status(200).send(result.favorites);
    }).catch(() => res.status(404));
  });
});

app.post('/updateFavoriteActivities', function(req, res) {
  const userId = req.session.user || 15;
  const { id } = req.body;
  User.findOne({ id: userId }).then(({favoriteActivities}) => {
    const len = favoriteActivities.length;
    favoriteActivities = favoriteActivities.filter(num => num !== id); 
    if (favoriteActivities.length === len) favoriteActivities.push(id);

    User.findOneAndUpdate({ id: userId }, { $set: {favoriteActivities}}, {new: true}).then(result => {
      res.status(200).send(result.favoriteActivities);
    }).catch(() => res.status(404));
  })
})

app.get('/rooms/:id', function(req, res) {
  let modules = [];

  getRoomAndUserInfo(req)
    .then(({ room, relatedListings, activities, user }) => {
      const store = createStore(rootReducer, { room, relatedListings, activities, user }, applyMiddleware(thunk));
      const initialState = store.getState();

      const htmls = {
        galleryHtml: renderToString(
          <Provider store={store}>
            <Gallery />
          </Provider>
        ),
        relatedListingsHtml: renderToString(
          <Provider store={store}>
            <RelatedListings />
          </Provider>
        ),
        navHtml: renderToString(
          <Provider store={store}>
            <Nav />
          </Provider>
        ),
        descriptionHtml: renderToString(
          <Provider store={store}>
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              <Description />
            </Loadable.Capture>
          </Provider>
        ),
        modalHtml: renderToString(
          <Provider store={store}>
            <CarouselModal />
          </Provider>
        ),
        bookingHtml: renderToString(
          <Provider store={store}>
            <Booking />
          </Provider>
        )
      };

      let bundles = getBundles(stats, modules);

    res.status(200).send(template(initialState, htmls, bundles));
  });
});


//this route is for proxies, and will be removed in near future
app.get('/getRoom/:id', function(req, res) {
  getRoomAndUserInfo(req)
    .then(({ room, relatedListings, activities, user }) => {
      const store = createStore(rootReducer, { room, relatedListings, activities, user }, applyMiddleware(thunk));
      const initialState = store.getState();

      const htmls = {
        galleryHtml: renderToString(
          <Provider store={store}>
            <Gallery />
          </Provider>
        ),
        relatedListingsHtml: renderToString(
          <Provider store={store}>
            <RelatedListings />
          </Provider>
        ),
        navHtml: renderToString(
          <Provider store={store}>
            <Nav />
          </Provider>
        ),
        descriptionHtml: renderToString(
          <Provider store={store}>
            <Description />
          </Provider>
        ),
        modalHtml: renderToString(
          <Provider store={store}>
            <CarouselModal />
          </Provider>
        ),
        // bookingHtml: renderToString(
        //   <Provider store={store}>
        //     <Booking />
        //   </Provider>
        // )
      };

      res.status(200).send({initialState, htmls});
    }).catch(() => res.status(404));
});

Loadable.preloadAll().then(() => {
  app.listen(port, function() {
    console.log(`server up on port ${port}`);
  });
})
