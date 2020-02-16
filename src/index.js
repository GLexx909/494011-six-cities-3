import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const RENTAL_OFFERS_COUNT = 312;
const RENTAL_OFFERS_TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

ReactDOM.render(
    <App rentalOffersCount={RENTAL_OFFERS_COUNT} rentalOffersTitles={RENTAL_OFFERS_TITLES}/>,
    document.getElementById(`root`)
);
