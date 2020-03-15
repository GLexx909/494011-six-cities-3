import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card";
import {BrowserRouter} from "react-router-dom";
import offers from '../../mocks/offers';

it(`<OfferCard/> should render component`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <OfferCard offer={offers[0]} onMainButtonClick={() => {}} onHandleMouseOver={() => {}} index={0}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
