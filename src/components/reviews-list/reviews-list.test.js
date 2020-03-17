import React from 'react';
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import offers from '../../mocks/offers';

it(`<ReviewsList/> should render component`, () => {
  const tree = renderer
  .create(
      <ReviewsList reviews={offers[0].reviews}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
