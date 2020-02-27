import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./offer-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  title: `Title_1`,
  price: 1000,
};

it(`Should main button be pressed`, () => {
  const onCardButtonClick = jest.fn();
  const onHandleMouseOver = jest.fn();

  const card = shallow(
      <OfferCard
        onMainButtonClick={onCardButtonClick}
        offer={offer}
        onHandleMouseOver={onHandleMouseOver}/>
  );

  const cardButton = card.find(`.place-card__name`);
  const placeCard = card.find(`.place-card`);

  cardButton.props().onClick();
  placeCard.props().onMouseOver();

  expect(onCardButtonClick.mock.calls.length).toBe(1);
  expect(onHandleMouseOver.mock.calls.length).toBe(1);
});
