import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./offer-card";
import offers from '../../mocks/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should main button be pressed`, () => {
  const onCardButtonClick = jest.fn();
  const onHandleMouseOver = jest.fn();

  const card = shallow(
      <OfferCard
        onMainButtonClick={onCardButtonClick}
        offer={offers[0]}
        onHandleMouseOver={onHandleMouseOver} index={0}/>
  );

  const cardButton = card.find(`.place-card__link`);
  const placeCard = card.find(`.place-card`);

  cardButton.props().onClick();
  placeCard.props().onMouseOver();

  expect(onCardButtonClick.mock.calls.length).toBe(1);
  expect(onHandleMouseOver.mock.calls.length).toBe(1);
});
