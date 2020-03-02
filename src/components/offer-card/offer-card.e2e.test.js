import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./offer-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  src: `img/apartment-01.jpg`,
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this
                  alley flowery and colorful.`,
  premium: true,
  housingType: `Apartment`,
  rating: 4.5,
  bedrooms: `2 Bedrooms`,
  guestsNumber: `Max 4 adults`,
  householdItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  owner: {
    image: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    isSuper: true
  }
};

it(`Should main button be pressed`, () => {
  const onCardButtonClick = jest.fn();
  const onHandleMouseOver = jest.fn();

  const card = shallow(
      <OfferCard
        onMainButtonClick={onCardButtonClick}
        offer={offer}
        onHandleMouseOver={onHandleMouseOver} index={0}/>
  );

  const cardButton = card.find(`.place-card__link`);
  const placeCard = card.find(`.place-card`);

  cardButton.props().onClick();
  placeCard.props().onMouseOver();

  expect(onCardButtonClick.mock.calls.length).toBe(1);
  expect(onHandleMouseOver.mock.calls.length).toBe(1);
});
