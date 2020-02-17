import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";

const rentalOffersCount = 312;
const rentalOffersTitles = [`Beautiful`, `Wood`];

it(`<Main/> should render component`, () => {
  const tree = renderer
  .create(
      <Main rentalOffersCount={rentalOffersCount} rentalOffersTitles={rentalOffersTitles}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
