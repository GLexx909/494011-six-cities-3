import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from "./offers-list";

const offers = [
  {
    title: `Title_1`,
    price: 1000,
  },
  {
    title: `Title_2`,
    price: 2000,
  }
];

it(`<OffersList/> should render component`, () => {
  const tree = renderer
  .create(
      <OffersList offers={offers} onMainButtonClick={() => {}}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
