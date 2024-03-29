import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {offersNearby} from './mocks/offers-nearby';
import {reviews} from './mocks/reviews';
import {CITY, CityOffers} from './mocks/city';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

// eslint-disable-next-line no-console
console.log(store.dispatch(fetchOffersAction()));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  placesCount: 320,
} as const;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App arrayOfCities={CityOffers} city={CITY} offers={offers} offersOpcion={offersNearby} reviews={reviews} placesCount={Setting.placesCount}/>
    </Provider>
  </React.StrictMode>,
);
