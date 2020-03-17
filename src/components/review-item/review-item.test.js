import React from 'react';
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";
import offers from '../../mocks/offers';

it(`<ReviewsList/> should render component`, () => {
  const tree = renderer
  .create(
      <ReviewItem review={offers[0].reviews[0]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
