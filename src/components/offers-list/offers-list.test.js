import React from 'react';
import renderer from "react-test-renderer";
import OffersList from "./offers-list";
import {BrowserRouter} from "react-router-dom";
import offers from '../../mocks/offers';

it(`<OffersList/> should render component`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <OffersList offers={offers} onMainButtonClick={() => {}}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
