import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";
import {BrowserRouter} from "react-router-dom";
import offers from '../../mocks/offers';

it(`<Main/> should render component`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <Main offers={offers} onMainButtonClick={() => {}}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
