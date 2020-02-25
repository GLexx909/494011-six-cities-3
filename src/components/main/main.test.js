import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";

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

it(`<Main/> should render component`, () => {
  const tree = renderer
  .create(
      <Main offers={offers} onMainButtonClick={() => {}}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
