import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const rentalOffersCount = 312;
const rentalOffersTitles = [`Beautiful`, `Wood`];

it(`Should main button be pressed`, () => {
  const onMainButtonClick = jest.fn();

  const main = shallow(
      <Main
        rentalOffersCount={rentalOffersCount}
        rentalOffersTitles={rentalOffersTitles}
        onMainButtonClick={onMainButtonClick}/>
  );

  const mainButton = main.find(`place-card__name`);

  mainButton.props().onClick();

  expect(onMainButtonClick.mock.calls.length).toBe(1);
});
