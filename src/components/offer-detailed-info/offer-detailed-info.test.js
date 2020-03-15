import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetailedInfo from "./offer-detailed-info";
import {BrowserRouter} from "react-router-dom";
import offers from '../../mocks/offers';

it(`<OfferDetailedInfo/> should render component`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <OfferDetailedInfo offer={offers[0]}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
