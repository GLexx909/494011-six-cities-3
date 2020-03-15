import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map";
import offers from '../../mocks/offers';

it(`<Map/> should render component`, () => {
  const tree = renderer
  .create(
      <Map offers={offers}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
