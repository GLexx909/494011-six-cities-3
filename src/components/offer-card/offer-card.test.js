import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card";

const offer = {
  title: `Title_1`,
  price: 1000,
};

it(`<OfferCard/> should render component`, () => {
  const tree = renderer
  .create(
      <OfferCard offer={offer} onMainButtonClick={() => {}} handleMouseOver={() => {}}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
